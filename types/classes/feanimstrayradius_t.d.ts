interface FeAnimStrayRadius_t {
    "Node": Object;
    "MaxDist": number;
    "RelaxationFactor": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeAnimStrayRadius_t(ptr_or_class: string|AnySDKClass): FeAnimStrayRadius_t;