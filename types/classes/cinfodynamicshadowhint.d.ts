interface CInfoDynamicShadowHint {
    "Disabled": boolean;
    "Range": number;
    "Importance": number;
    "LightChoice": number;
    readonly "Light": CBaseEntity;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoDynamicShadowHint(ptr_or_class: string|AnySDKClass): CInfoDynamicShadowHint;