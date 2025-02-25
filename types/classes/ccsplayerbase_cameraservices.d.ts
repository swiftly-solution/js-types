interface CCSPlayerBase_CameraServices {
    "FOV": number;
    "FOVStart": number;
    "FOVTime": number;
    "FOVRate": number;
    readonly "ZoomOwner": CBaseEntity;
    readonly "LastFogTrigger": CBaseEntity;
    readonly "Parent": CPlayer_CameraServices;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayerBase_CameraServices(ptr_or_class: string|AnySDKClass): CCSPlayerBase_CameraServices;