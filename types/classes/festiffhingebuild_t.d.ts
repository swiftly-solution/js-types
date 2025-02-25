interface FeStiffHingeBuild_t {
    "MaxAngle": number;
    "Strength": number;
    "MotionBias": Object;
    "Node": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeStiffHingeBuild_t(ptr_or_class: string|AnySDKClass): FeStiffHingeBuild_t;