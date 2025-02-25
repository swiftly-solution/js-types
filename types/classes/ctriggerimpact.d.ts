interface CTriggerImpact {
    "Magnitude": number;
    "Noise": number;
    "Viewkick": number;
    readonly "Parent": CTriggerMultiple;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerImpact(ptr_or_class: string|AnySDKClass): CTriggerImpact;