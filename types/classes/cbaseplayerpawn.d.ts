interface CBasePlayerPawn {
    readonly "WeaponServices": CPlayer_WeaponServices;
    readonly "ItemServices": CPlayer_ItemServices;
    readonly "AutoaimServices": CPlayer_AutoaimServices;
    readonly "ObserverServices": CPlayer_ObserverServices;
    readonly "WaterServices": CPlayer_WaterServices;
    readonly "UseServices": CPlayer_UseServices;
    readonly "FlashlightServices": CPlayer_FlashlightServices;
    readonly "CameraServices": CPlayer_CameraServices;
    readonly "MovementServices": CPlayer_MovementServices;
    readonly "ServerViewAngleChanges": Object;
    "HighestGeneratedServerViewAngleChangeIndex": number;
    "_angle": QAngle;
    "_anglePrevious": QAngle;
    "HideHUD": number;
    readonly "Skybox3d": sky3dparams_t;
    "TimeLastHurt": number;
    "DeathTime": number;
    "NextSuicideTime": number;
    "InitHUD": boolean;
    readonly "Expresser": CAI_Expresser;
    readonly "Controller": CBasePlayerController;
    "HltvReplayDelay": number;
    "HltvReplayEnd": number;
    "HltvReplayEntity": number;
    readonly "SndOpvarLatchData": Object;
    readonly "Parent": CBaseCombatCharacter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBasePlayerPawn(ptr_or_class: string|AnySDKClass): CBasePlayerPawn;