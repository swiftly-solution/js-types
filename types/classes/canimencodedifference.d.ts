interface CAnimEncodeDifference {
    readonly "BoneArray": Object;
    readonly "MorphArray": Object;
    readonly "UserArray": Object;
    readonly "HasRotationBitArray": Object;
    readonly "HasMovementBitArray": Object;
    readonly "HasMorphBitArray": Object;
    readonly "HasUserBitArray": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimEncodeDifference(ptr_or_class: string|AnySDKClass): CAnimEncodeDifference;