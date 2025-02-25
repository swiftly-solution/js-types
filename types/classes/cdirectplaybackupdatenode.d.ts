interface CDirectPlaybackUpdateNode {
    "FinishEarly": boolean;
    "ResetOnFinish": boolean;
    readonly "AllTags": Object;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDirectPlaybackUpdateNode(ptr_or_class: string|AnySDKClass): CDirectPlaybackUpdateNode;