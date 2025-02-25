interface CAnimGraphDebugReplay {
    "AnimGraphFileName": string;
    "StartIndex": number;
    "WriteIndex": number;
    "FrameCount": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimGraphDebugReplay(ptr_or_class: string|AnySDKClass): CAnimGraphDebugReplay;