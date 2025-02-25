interface AnimationDecodeDebugDump_t {
    "ProcessingType": number;
    readonly "Elems": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AnimationDecodeDebugDump_t(ptr_or_class: string|AnySDKClass): AnimationDecodeDebugDump_t;