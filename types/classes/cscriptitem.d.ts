interface CScriptItem {
    "MoveTypeOverride": number;
    readonly "Parent": CItem;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CScriptItem(ptr_or_class: string|AnySDKClass): CScriptItem;