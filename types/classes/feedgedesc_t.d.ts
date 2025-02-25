interface FeEdgeDesc_t {
    "Edge": Object;
    "VirtElem": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeEdgeDesc_t(ptr_or_class: string|AnySDKClass): FeEdgeDesc_t;