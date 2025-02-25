interface CFuseSymbolTable {
    readonly "Constants": Object;
    readonly "Variables": Object;
    readonly "Functions": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuseSymbolTable(ptr_or_class: string|AnySDKClass): CFuseSymbolTable;