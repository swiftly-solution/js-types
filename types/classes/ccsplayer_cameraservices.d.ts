interface CCSPlayer_CameraServices {
    readonly "Parent": CCSPlayerBase_CameraServices;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayer_CameraServices(ptr_or_class: string|AnySDKClass): CCSPlayer_CameraServices;