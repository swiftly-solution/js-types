interface CTriggerSave {
    "ForceNewLevelUnit": boolean;
    "DangerousTimer": number;
    "MinHitPoints": number;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerSave(ptr_or_class: string|AnySDKClass): CTriggerSave;