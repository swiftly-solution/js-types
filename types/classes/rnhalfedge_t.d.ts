interface RnHalfEdge_t {
    "Next": number;
    "Twin": number;
    "Origin": number;
    "Face": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnHalfEdge_t(ptr_or_class: string|AnySDKClass): RnHalfEdge_t;