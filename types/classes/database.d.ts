interface Database {

    IsConnected: () => boolean;
    QueryBuilder: () => QueryBuilder;
    EscapeString: (value: string) => string;
    Query: (query: string,callback: null | ((err:string,result:Object[]) => void)) => null|undefined;
    QueryParams: (query: string,callback: null | ((err:string,result:Object[]) => void)) => null|undefined;
}

declare function Database(connection_name: string): Database;