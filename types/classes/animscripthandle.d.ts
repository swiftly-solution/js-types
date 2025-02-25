interface AnimScriptHandle {
    "Id": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AnimScriptHandle(ptr_or_class: string|AnySDKClass): AnimScriptHandle;