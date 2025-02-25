interface CEnvMuzzleFlash {
    "Scale": number;
    "ParentAttachment": string;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvMuzzleFlash(ptr_or_class: string|AnySDKClass): CEnvMuzzleFlash;