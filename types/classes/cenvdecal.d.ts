interface CEnvDecal {
    "Width": number;
    "Height": number;
    "Depth": number;
    "RenderOrder": number;
    "ProjectOnWorld": boolean;
    "ProjectOnCharacters": boolean;
    "ProjectOnWater": boolean;
    "DepthSortBias": number;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvDecal(ptr_or_class: string|AnySDKClass): CEnvDecal;