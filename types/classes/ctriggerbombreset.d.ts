interface CTriggerBombReset {
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerBombReset(ptr_or_class: string|AnySDKClass): CTriggerBombReset;