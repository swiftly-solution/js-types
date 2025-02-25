interface CAimCameraUpdateNode {
    readonly "ParameterPosition": CAnimParamHandle;
    readonly "ParameterOrientation": CAnimParamHandle;
    readonly "ParameterSpineRotationWeight": CAnimParamHandle;
    readonly "ParameterPelvisOffset": CAnimParamHandle;
    readonly "ParameterUseIK": CAnimParamHandle;
    readonly "ParameterCameraOnly": CAnimParamHandle;
    readonly "ParameterWeaponDepenetrationDistance": CAnimParamHandle;
    readonly "ParameterWeaponDepenetrationDelta": CAnimParamHandle;
    readonly "ParameterCameraClearanceDistance": CAnimParamHandle;
    readonly "OpFixedSettings": AimCameraOpFixedSettings_t;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAimCameraUpdateNode(ptr_or_class: string|AnySDKClass): CAimCameraUpdateNode;