export enum SearchEngine {
    'Google' = 1,
    'Bing' = 2,    
}

export namespace SearchEngine {
    export function values() {
        return Object.keys(SearchEngine).filter(
          (type) => isNaN(<any>type) && type !== 'values'
        ).sort();
    }
}