interface SkeletonDemoDb_t {
    readonly "AnimCaptures": Object;
    "RecordingTime": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SkeletonDemoDb_t(ptr_or_class: string|AnySDKClass): SkeletonDemoDb_t;