interface CEnvSpark {
    "Delay": number;
    "Magnitude": number;
    "TrailLength": number;
    "Type": number;
    readonly "OnSpark": CEntityIOOutput;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvSpark(ptr_or_class: string|AnySDKClass): CEnvSpark;