interface AnimationDecodeDebugDumpElement_t {
    "EntityIndex": number;
    "ModelName": string;
    readonly "PoseParams": Object;
    readonly "DecodeOps": Object;
    readonly "InternalOps": Object;
    readonly "DecodedAnims": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AnimationDecodeDebugDumpElement_t(ptr_or_class: string|AnySDKClass): AnimationDecodeDebugDumpElement_t;