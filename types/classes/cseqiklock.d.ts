interface CSeqIKLock {
    "PosWeight": number;
    "AngleWeight": number;
    "LocalBone": number;
    "BonesOrientedAlongPositiveX": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSeqIKLock(ptr_or_class: string|AnySDKClass): CSeqIKLock;