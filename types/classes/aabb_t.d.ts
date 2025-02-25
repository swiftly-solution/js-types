interface AABB_t {
    "MinBounds": Vector;
    "MaxBounds": Vector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AABB_t(ptr_or_class: string|AnySDKClass): AABB_t;