interface CNmSkeleton {
    readonly "ParentIndices": Object;
    "NumBonesToSampleAtLowLOD": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmSkeleton(ptr_or_class: string|AnySDKClass): CNmSkeleton;