interface CPlayer_CameraServices {
    "CsViewPunchAngle": QAngle;
    "CsViewPunchAngleTick": number;
    "CsViewPunchAngleTickRatio": number;
    readonly "PlayerFog": fogplayerparams_t;
    readonly "ColorCorrectionCtrl": CColorCorrection;
    readonly "ViewEntity": CBaseEntity;
    readonly "TonemapController": CTonemapController2;
    readonly "Audio": audioparams_t;
    "OldPlayerZ": number;
    "OldPlayerViewOffsetZ": number;
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayer_CameraServices(ptr_or_class: string|AnySDKClass): CPlayer_CameraServices;