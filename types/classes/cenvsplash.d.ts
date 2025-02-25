interface CEnvSplash {
    "Scale": number;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvSplash(ptr_or_class: string|AnySDKClass): CEnvSplash;