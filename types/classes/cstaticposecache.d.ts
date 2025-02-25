interface CStaticPoseCache {
    readonly "Poses": Object;
    "BoneCount": number;
    "MorphCount": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CStaticPoseCache(ptr_or_class: string|AnySDKClass): CStaticPoseCache;