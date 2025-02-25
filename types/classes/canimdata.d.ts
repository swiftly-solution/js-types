interface CAnimData {
    readonly "AnimArray": Object;
    readonly "DecoderArray": Object;
    "MaxUniqueFrameIndex": number;
    readonly "SegmentArray": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimData(ptr_or_class: string|AnySDKClass): CAnimData;