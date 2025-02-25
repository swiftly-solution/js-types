interface CSeqScaleSet {
    "RootOffset": boolean;
    "RootOffset1": Vector;
    readonly "LocalBoneArray": Object;
    readonly "BoneScaleArray": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSeqScaleSet(ptr_or_class: string|AnySDKClass): CSeqScaleSet;