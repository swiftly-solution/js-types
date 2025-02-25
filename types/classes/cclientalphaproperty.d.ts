interface CClientAlphaProperty {
    "RenderFX": number;
    "RenderMode": number;
    "AlphaOverride": any;
    "ShadowAlphaOverride": any;
    "Reserved": any;
    "Alpha": number;
    "DesyncOffset": number;
    "Reserved2": number;
    "DistFadeStart": number;
    "DistFadeEnd": number;
    "FadeScale": number;
    "RenderFxStartTime": number;
    "RenderFxDuration": number;
    readonly "Parent": IClientAlphaProperty;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CClientAlphaProperty(ptr_or_class: string|AnySDKClass): CClientAlphaProperty;