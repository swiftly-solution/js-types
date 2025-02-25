interface ModelSkeletonData_t {
    readonly "BoneName": Object;
    readonly "Parent": Object;
    readonly "BoneSphere": Object;
    readonly "Flag": Object;
    readonly "BonePosParent": Object;
    readonly "BoneScaleParent": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ModelSkeletonData_t(ptr_or_class: string|AnySDKClass): ModelSkeletonData_t;