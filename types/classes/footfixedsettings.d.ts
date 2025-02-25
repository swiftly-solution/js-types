interface FootFixedSettings {
    readonly "TraceSettings": TraceSettings_t;
    "FootBaseBindPosePositionMS": Vector;
    "FootBaseLength": number;
    "MaxRotationLeft": number;
    "MaxRotationRight": number;
    "FootstepLandedTagIndex": number;
    "EnableTracing": boolean;
    "TraceAngleBlend": number;
    "DisableTagIndex": number;
    "FootIndex": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FootFixedSettings(ptr_or_class: string|AnySDKClass): FootFixedSettings;