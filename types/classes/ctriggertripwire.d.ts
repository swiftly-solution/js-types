interface CTriggerTripWire {
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerTripWire(ptr_or_class: string|AnySDKClass): CTriggerTripWire;