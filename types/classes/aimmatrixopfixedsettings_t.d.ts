interface AimMatrixOpFixedSettings_t {
    readonly "Attachment": CAnimAttachment;
    readonly "Damping": CAnimInputDamping;
    readonly "PoseCacheHandles": Object;
    "BlendMode": number;
    "MaxYawAngle": number;
    "MaxPitchAngle": number;
    "SequenceMaxFrame": number;
    "BoneMaskIndex": number;
    "TargetIsPosition": boolean;
    "UseBiasAndClamp": boolean;
    "BiasAndClampYawOffset": number;
    "BiasAndClampPitchOffset": number;
    readonly "BiasAndClampBlendCurve": CBlendCurve;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AimMatrixOpFixedSettings_t(ptr_or_class: string|AnySDKClass): AimMatrixOpFixedSettings_t;