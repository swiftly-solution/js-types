interface CTriggerGravity {
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerGravity(ptr_or_class: string|AnySDKClass): CTriggerGravity;