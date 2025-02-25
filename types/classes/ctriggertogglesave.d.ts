interface CTriggerToggleSave {
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerToggleSave(ptr_or_class: string|AnySDKClass): CTriggerToggleSave;