interface CStaticPoseCacheBuilder {
    readonly "Parent": CStaticPoseCache;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CStaticPoseCacheBuilder(ptr_or_class: string|AnySDKClass): CStaticPoseCacheBuilder;