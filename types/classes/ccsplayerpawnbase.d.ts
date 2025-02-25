interface CCSPlayerPawnBase {
    readonly "CTouchExpansionComponent": CTouchExpansionComponent;
    readonly "PingServices": CCSPlayer_PingServices;
    readonly "ViewModelServices": CPlayer_ViewModelServices;
    "BlindUntilTime": number;
    "BlindStartTime": number;
    "PlayerState": number;
    "Respawning": boolean;
    "ImmuneToGunGameDamageTime": number;
    "GunGameImmunity": boolean;
    "MolotovDamageTime": number;
    "HasMovedSinceSpawn": boolean;
    "NumSpawns": number;
    "IdleTimeSinceLastAction": number;
    "NextRadarUpdateTime": number;
    "FlashDuration": number;
    "FlashMaxAlpha": number;
    "ProgressBarStartTime": number;
    "ProgressBarDuration": number;
    "EyeAngles": QAngle;
    "WasNotKilledNaturally": boolean;
    "CommittingSuicideOnTeamChange": boolean;
    readonly "OriginalController": CCSPlayerController;
    readonly "Parent": CBasePlayerPawn;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayerPawnBase(ptr_or_class: string|AnySDKClass): CCSPlayerPawnBase;