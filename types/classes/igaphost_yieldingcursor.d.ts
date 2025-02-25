interface IGapHost_YieldingCursor {
    readonly "Parent": IGapHost_Cursor;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IGapHost_YieldingCursor(ptr_or_class: string|AnySDKClass): IGapHost_YieldingCursor;