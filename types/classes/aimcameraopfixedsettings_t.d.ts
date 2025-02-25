interface AimCameraOpFixedSettings_t {
    "ChainIndex": number;
    "CameraJointIndex": number;
    "PelvisJointIndex": number;
    "ClavicleLeftJointIndex": number;
    "ClavicleRightJointIndex": number;
    "DepenetrationJointIndex": number;
    readonly "PropJoints": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AimCameraOpFixedSettings_t(ptr_or_class: string|AnySDKClass): AimCameraOpFixedSettings_t;