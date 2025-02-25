interface CSingleFrameUpdateNode {
    readonly "PoseCacheHandle": CPoseHandle;
    "Sequence": number;
    "Cycle": number;
    readonly "Parent": CLeafUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSingleFrameUpdateNode(ptr_or_class: string|AnySDKClass): CSingleFrameUpdateNode;