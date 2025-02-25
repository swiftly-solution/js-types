interface CTriggerHostageReset {
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerHostageReset(ptr_or_class: string|AnySDKClass): CTriggerHostageReset;