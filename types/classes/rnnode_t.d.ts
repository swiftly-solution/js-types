interface RnNode_t {
    "Min": Vector;
    "Children": number;
    "Max": Vector;
    "TriangleOffset": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnNode_t(ptr_or_class: string|AnySDKClass): RnNode_t;