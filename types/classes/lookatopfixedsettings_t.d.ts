interface LookAtOpFixedSettings_t {
    readonly "Attachment": CAnimAttachment;
    readonly "Damping": CAnimInputDamping;
    readonly "Bones": Object;
    "YawLimit": number;
    "PitchLimit": number;
    "HysteresisInnerAngle": number;
    "HysteresisOuterAngle": number;
    "RotateYawForward": boolean;
    "MaintainUpDirection": boolean;
    "TargetIsPosition": boolean;
    "UseHysteresis": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function LookAtOpFixedSettings_t(ptr_or_class: string|AnySDKClass): LookAtOpFixedSettings_t;