interface CNmRootMotionData {
    "NumFrames": number;
    "AverageLinearVelocity": number;
    "AverageAngularVelocityRadians": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmRootMotionData(ptr_or_class: string|AnySDKClass): CNmRootMotionData;