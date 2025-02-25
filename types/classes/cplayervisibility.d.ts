interface CPlayerVisibility {
    "VisibilityStrength": number;
    "FogDistanceMultiplier": number;
    "FogMaxDensityMultiplier": number;
    "FadeTime": number;
    "StartDisabled": boolean;
    "IsEnabled": boolean;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayerVisibility(ptr_or_class: string|AnySDKClass): CPlayerVisibility;