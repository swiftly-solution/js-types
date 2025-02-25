interface RenderSkeletonBone_t {
    "BoneName": string;
    "ParentName": string;
    readonly "Bbox": SkeletonBoneBounds_t;
    "SphereRadius": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RenderSkeletonBone_t(ptr_or_class: string|AnySDKClass): RenderSkeletonBone_t;