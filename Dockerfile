# base image
FROM node:20.11.1-alpine as build

ARG build_env="production"
ENV env_build_env ${build_env}
RUN echo "build_env being used: $env_build_env"

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY . /app
RUN npm ci --legacy-peer-deps
#RUN npm install -g @angular/cli


RUN ng build --configuration=$env_build_env --output-path=dist

############
### prod ###
############

# base image
FROM nginx:1.26.2-alpine

# copy artifact build from the 'build environment'
COPY --from=build /app/dist/browser /usr/share/nginx/html

# copy Angular SPA friendly config
COPY nginx-conf /etc/nginx/conf.d/

# expose port 80
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]
