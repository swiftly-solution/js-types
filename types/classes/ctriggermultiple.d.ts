interface CTriggerMultiple {
    readonly "OnTrigger": CEntityIOOutput;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerMultiple(ptr_or_class: string|AnySDKClass): CTriggerMultiple;