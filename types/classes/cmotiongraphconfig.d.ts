interface CMotionGraphConfig {
    "ParamValues": Object;
    "Duration": number;
    readonly "MotionIndex": MotionIndex;
    "SampleStart": number;
    "SampleCount": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMotionGraphConfig(ptr_or_class: string|AnySDKClass): CMotionGraphConfig;