interface FootStepTrigger {
    readonly "Tags": Object;
    "FootIndex": number;
    "TriggerPhase": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FootStepTrigger(ptr_or_class: string|AnySDKClass): FootStepTrigger;