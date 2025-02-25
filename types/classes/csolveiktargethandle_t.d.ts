interface CSolveIKTargetHandle_t {
    readonly "PositionHandle": CAnimParamHandle;
    readonly "OrientationHandle": CAnimParamHandle;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSolveIKTargetHandle_t(ptr_or_class: string|AnySDKClass): CSolveIKTargetHandle_t;