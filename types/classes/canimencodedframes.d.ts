interface CAnimEncodedFrames {
    "Frames": number;
    "FramesPerBlock": number;
    readonly "FrameblockArray": Object;
    readonly "UsageDifferences": CAnimEncodeDifference;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimEncodedFrames(ptr_or_class: string|AnySDKClass): CAnimEncodedFrames;