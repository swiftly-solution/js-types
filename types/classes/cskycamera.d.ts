interface CSkyCamera {
    readonly "SkyboxData": sky3dparams_t;
    "SkyboxSlotToken": number;
    "UseAngles": boolean;
    readonly "Next": CSkyCamera;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSkyCamera(ptr_or_class: string|AnySDKClass): CSkyCamera;