interface AnimationSnapshotBase_t {
    "RealTime": number;
    "BonesInWorldSpace": boolean;
    readonly "BoneSetupMask": Object;
    readonly "FlexControllers": Object;
    "SnapshotType": number;
    "HasDecodeDump": boolean;
    readonly "DecodeDump": AnimationDecodeDebugDumpElement_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AnimationSnapshotBase_t(ptr_or_class: string|AnySDKClass): AnimationSnapshotBase_t;