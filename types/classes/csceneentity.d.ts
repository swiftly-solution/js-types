interface CSceneEntity {
    "SceneFile": string;
    "ResumeSceneFile": string;
    "Target1": string;
    "Target2": string;
    "Target3": string;
    "Target4": string;
    "Target5": string;
    "Target6": string;
    "Target7": string;
    "Target8": string;
    readonly "Target11": CBaseEntity;
    readonly "Target21": CBaseEntity;
    readonly "Target31": CBaseEntity;
    readonly "Target41": CBaseEntity;
    readonly "Target51": CBaseEntity;
    readonly "Target61": CBaseEntity;
    readonly "Target71": CBaseEntity;
    readonly "Target81": CBaseEntity;
    "TargetAttachment": string;
    "IsPlayingBack": boolean;
    "Paused": boolean;
    "Multiplayer": boolean;
    "Autogenerated": boolean;
    "ForceClientTime": number;
    "CurrentTime": number;
    "FrameTime": number;
    "CancelAtNextInterrupt": boolean;
    "Pitch": number;
    "Automated": boolean;
    "AutomatedAction": number;
    "AutomationDelay": number;
    "AutomationTime": number;
    readonly "WaitingForThisResumeScene": CBaseEntity;
    "WaitingForResumeScene": boolean;
    "PausedViaInput": boolean;
    "PauseAtNextInterrupt": boolean;
    "WaitingForActor": boolean;
    "WaitingForInterrupt": boolean;
    "InterruptedActorsScenes": boolean;
    "BreakOnNonIdle": boolean;
    "SceneFinished": boolean;
    "SceneFlushCounter": number;
    "SceneStringIndex": number;
    readonly "OnStart": CEntityIOOutput;
    readonly "OnCompletion": CEntityIOOutput;
    readonly "OnCanceled": CEntityIOOutput;
    readonly "OnPaused": CEntityIOOutput;
    readonly "OnResumed": CEntityIOOutput;
    readonly "OnTrigger": Object;
    readonly "InterruptScene": CSceneEntity;
    "InterruptCount": number;
    "SceneMissing": boolean;
    "Interrupted": boolean;
    "CompletedEarly": boolean;
    "InterruptSceneFinished": boolean;
    "Restoring": boolean;
    "SoundName": string;
    "SequenceName": string;
    readonly "Actor": CBaseFlex;
    readonly "Activator": CBaseEntity;
    "BusyActor": number;
    "PlayerDeathBehavior": number;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSceneEntity(ptr_or_class: string|AnySDKClass): CSceneEntity;