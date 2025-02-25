interface FeQuad_t {
    "Node": Object;
    "Slack": number;
    "Shape": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeQuad_t(ptr_or_class: string|AnySDKClass): FeQuad_t;