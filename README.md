# Simpli Search Ranking App

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.1.
It the UI for Simpli Search Ranking

demo: https://simpli-search-ui.azurewebsites.net/

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


## Docker Compose
The project includes a docker-compose.yml file for containerized setup:

```bash
docker compose -f docker-compose.yml build
docker compose -f docker-compose.yml up 
```

## CI/CD with Azure Pipelines
This project uses Azure Pipelines for continuous integration and deployment:

Build Pipeline: Automatically builds and tests the application.
Release Pipeline: Deploys the application to Azure Web App Service using Azure Container Registry.
The entire process is automated to ensure reliable and seamless deployments.

## Monitoring with Azure Application Insights
Azure Application Insights is enabled to monitor application performance and usage:

Tracks incoming requests and their response times.
Logs errors and exceptions for debugging.
Provides detailed analytics on application usage.
To view insights, navigate to the Azure Portal and access the Application Insights resource linked to the deployed application.
