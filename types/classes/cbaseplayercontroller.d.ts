interface CBasePlayerController {
    "InButtonsWhichAreToggles": number;
    "TickBase": number;
    readonly "Pawn": CBasePlayerPawn;
    "KnownTeamMismatch": boolean;
    "SplitScreenSlot": number;
    readonly "SplitOwner": CBasePlayerController;
    "IsHLTV": boolean;
    "Connected": number;
    "PlayerName": string;
    "NetworkIDString": string;
    "LerpTime": number;
    "LagCompensation": boolean;
    "Predict": boolean;
    "IsLowViolence": boolean;
    "GamePaused": boolean;
    "IgnoreGlobalChat": number;
    "LastPlayerTalkTime": number;
    "LastEntitySteadyState": number;
    "AvailableEntitySteadyState": number;
    "HasAnySteadyStateEnts": boolean;
    "SteamID": number;
    "DesiredFOV": number;
    readonly "Parent": CBaseEntity;
    EntityIndex: () => number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBasePlayerController(ptr_or_class: string|AnySDKClass): CBasePlayerController;