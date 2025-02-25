interface CAnimSkeleton {
    readonly "BoneNames": Object;
    readonly "Parents": Object;
    readonly "Feet": Object;
    readonly "MorphNames": Object;
    readonly "LodBoneCounts": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimSkeleton(ptr_or_class: string|AnySDKClass): CAnimSkeleton;