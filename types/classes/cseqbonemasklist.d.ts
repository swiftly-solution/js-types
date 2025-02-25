interface CSeqBoneMaskList {
    readonly "LocalBoneArray": Object;
    readonly "BoneWeightArray": Object;
    "DefaultMorphCtrlWeight": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSeqBoneMaskList(ptr_or_class: string|AnySDKClass): CSeqBoneMaskList;