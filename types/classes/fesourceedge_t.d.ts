interface FeSourceEdge_t {
    "Node": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeSourceEdge_t(ptr_or_class: string|AnySDKClass): FeSourceEdge_t;