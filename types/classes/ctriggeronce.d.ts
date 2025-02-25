interface CTriggerOnce {
    readonly "Parent": CTriggerMultiple;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerOnce(ptr_or_class: string|AnySDKClass): CTriggerOnce;