interface CFuncVehicleClip {
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncVehicleClip(ptr_or_class: string|AnySDKClass): CFuncVehicleClip;