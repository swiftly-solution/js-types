interface CFuncPlatRot {
    "End": QAngle;
    "Start": QAngle;
    readonly "Parent": CFuncPlat;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncPlatRot(ptr_or_class: string|AnySDKClass): CFuncPlatRot;