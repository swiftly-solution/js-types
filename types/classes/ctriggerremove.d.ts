interface CTriggerRemove {
    readonly "OnRemove": CEntityIOOutput;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerRemove(ptr_or_class: string|AnySDKClass): CTriggerRemove;