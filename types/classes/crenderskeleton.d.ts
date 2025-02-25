interface CRenderSkeleton {
    readonly "Bones": Object;
    readonly "BoneParents": Object;
    "BoneWeightCount": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRenderSkeleton(ptr_or_class: string|AnySDKClass): CRenderSkeleton;