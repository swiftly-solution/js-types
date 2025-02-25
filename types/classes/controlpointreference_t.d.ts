interface ControlPointReference_t {
    "ControlPointNameString": number;
    "OffsetFromControlPoint": Vector;
    "OffsetInLocalSpace": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ControlPointReference_t(ptr_or_class: string|AnySDKClass): ControlPointReference_t;