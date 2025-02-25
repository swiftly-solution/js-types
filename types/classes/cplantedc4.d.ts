interface CPlantedC4 {
    "BombTicking": boolean;
    "C4Blow": number;
    "BombSite": number;
    "SourceSoundscapeHash": number;
    readonly "AttributeManager": CAttributeContainer;
    readonly "OnBombDefused": CEntityIOOutput;
    readonly "OnBombBeginDefuse": CEntityIOOutput;
    readonly "OnBombDefuseAborted": CEntityIOOutput;
    "CannotBeDefused": boolean;
    readonly "EntitySpottedState": EntitySpottedState_t;
    "SpotRules": number;
    "TrainingPlacedByPlayer": boolean;
    "HasExploded": boolean;
    "TimerLength": number;
    "BeingDefused": boolean;
    "LastDefuseTime": number;
    "DefuseLength": number;
    "DefuseCountDown": number;
    "BombDefused": boolean;
    readonly "BombDefuser": CCSPlayerPawn;
    readonly "ControlPanel": CBaseEntity;
    "ProgressBarTime": number;
    "VoiceAlertFired": boolean;
    "VoiceAlertPlayed": Object;
    "NextBotBeepTime": number;
    "CatchUpToPlayerEye": QAngle;
    "LastSpinDetectionTime": number;
    readonly "Parent": CBaseAnimGraph;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlantedC4(ptr_or_class: string|AnySDKClass): CPlantedC4;