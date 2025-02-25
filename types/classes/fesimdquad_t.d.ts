interface FeSimdQuad_t {
    "4Slack": number;
    "4Weights": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeSimdQuad_t(ptr_or_class: string|AnySDKClass): FeSimdQuad_t;