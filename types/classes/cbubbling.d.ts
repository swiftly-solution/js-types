interface CBubbling {
    "Density": number;
    "Frequency": number;
    "State": number;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBubbling(ptr_or_class: string|AnySDKClass): CBubbling;