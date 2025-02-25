interface SkeletonBoneBounds_t {
    "Center": Vector;
    "Size": Vector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SkeletonBoneBounds_t(ptr_or_class: string|AnySDKClass): SkeletonBoneBounds_t;