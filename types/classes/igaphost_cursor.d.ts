interface IGapHost_Cursor {
    readonly "Parent": IGapHost_ExecLog;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IGapHost_Cursor(ptr_or_class: string|AnySDKClass): IGapHost_Cursor;