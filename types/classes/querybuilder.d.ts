interface QueryBuilder {

    Table: (table_name: string) => QueryBuilder;
    Select: (columns: Object) => QueryBuilder;
    Insert: (insert_values: Object) => QueryBuilder;
    Update: (update_values: Object) => QueryBuilder;
    Delete: () => QueryBuilder;
    Where: (column: string,operator: string,value: any) => QueryBuilder;
    OrWhere: (column: string,operator: string,value: any) => QueryBuilder;
    Join: (table_name: string,condition: string,join_type: string) => QueryBuilder;
    OrderBy: (columns: Object) => QueryBuilder;
    Limit: (count: number) => QueryBuilder;
    GroupBy: (columns: Object) => QueryBuilder;
    Create: (columns: Object) => QueryBuilder;
    Alter: (addColumns: Object,removeColumns: Object,modifyColumns: Object) => QueryBuilder;
    Drop: () => QueryBuilder;
    OnDuplicate: (update_value: Object) => QueryBuilder;
    Having: (condition: string) => QueryBuilder;
    Distinct: () => QueryBuilder;
    Offset: (offset: number) => QueryBuilder;
    Union: (query: string,all: boolean) => QueryBuilder;
    Execute: (callback: null | ((err:string,result:Object[]) => void)) => null|undefined;
}