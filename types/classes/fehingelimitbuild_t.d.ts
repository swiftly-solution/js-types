interface FeHingeLimitBuild_t {
    "Node": Object;
    "Flags": number;
    "LimitCW": number;
    "LimitCCW": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeHingeLimitBuild_t(ptr_or_class: string|AnySDKClass): FeHingeLimitBuild_t;