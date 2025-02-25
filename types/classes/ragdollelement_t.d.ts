interface ragdollelement_t {
    "OriginParentSpace": Vector;
    "ParentIndex": number;
    "Radius": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ragdollelement_t(ptr_or_class: string|AnySDKClass): ragdollelement_t;