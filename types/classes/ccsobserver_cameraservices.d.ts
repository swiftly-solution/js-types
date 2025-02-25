interface CCSObserver_CameraServices {
    readonly "Parent": CCSPlayerBase_CameraServices;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSObserver_CameraServices(ptr_or_class: string|AnySDKClass): CCSObserver_CameraServices;