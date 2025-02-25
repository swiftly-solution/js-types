interface CTestDomainDerived_Cursor {
    "CursorValueA": number;
    "CursorValueB": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTestDomainDerived_Cursor(ptr_or_class: string|AnySDKClass): CTestDomainDerived_Cursor;