interface CAnimReplayFrame {
    "TimeStamp": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimReplayFrame(ptr_or_class: string|AnySDKClass): CAnimReplayFrame;