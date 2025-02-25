interface CParticleSystem {
    "SnapshotFileName": string;
    "Active": boolean;
    "Frozen": boolean;
    "FreezeTransitionDuration": number;
    "StopType": number;
    "AnimateDuringGameplayPause": boolean;
    "StartTime": number;
    "PreSimTime": number;
    "ServerControlPoints": Object;
    "ServerControlPointAssignments": Object;
    readonly "ControlPointEnts": Object;
    "NoSave": boolean;
    "NoFreeze": boolean;
    "NoRamp": boolean;
    "StartActive": boolean;
    "EffectName": string;
    "ControlPointNames": Object;
    "DataCP": number;
    "DataCPValue": Vector;
    "TintCP": number;
    "Tint": Color;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleSystem(ptr_or_class: string|AnySDKClass): CParticleSystem;