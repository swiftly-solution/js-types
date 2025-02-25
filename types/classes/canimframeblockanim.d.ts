interface CAnimFrameBlockAnim {
    "StartFrame": number;
    "EndFrame": number;
    readonly "SegmentIndexArray": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimFrameBlockAnim(ptr_or_class: string|AnySDKClass): CAnimFrameBlockAnim;