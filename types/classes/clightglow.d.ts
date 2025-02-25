interface CLightGlow {
    "HorizontalSize": number;
    "VerticalSize": number;
    "MinDist": number;
    "MaxDist": number;
    "OuterMaxDist": number;
    "GlowProxySize": number;
    "HDRColorScale": number;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLightGlow(ptr_or_class: string|AnySDKClass): CLightGlow;