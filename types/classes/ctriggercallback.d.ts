interface CTriggerCallback {
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerCallback(ptr_or_class: string|AnySDKClass): CTriggerCallback;