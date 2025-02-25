interface CMorphConstraint {
    "TargetMorph": string;
    "SlaveChannel": number;
    "Min": number;
    "Max": number;
    readonly "Parent": CBaseConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMorphConstraint(ptr_or_class: string|AnySDKClass): CMorphConstraint;