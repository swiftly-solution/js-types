interface CPathParticleRope {
    "StartActive": boolean;
    "MaxSimulationTime": number;
    "EffectName": string;
    readonly "PathNodes_Name": Object;
    "ParticleSpacing": number;
    "Slack": number;
    "Radius": number;
    "ColorTint": Color;
    "EffectState": number;
    readonly "PathNodes_Position": Object;
    readonly "PathNodes_TangentIn": Object;
    readonly "PathNodes_TangentOut": Object;
    readonly "PathNodes_Color": Object;
    readonly "PathNodes_PinEnabled": Object;
    readonly "PathNodes_RadiusScale": Object;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPathParticleRope(ptr_or_class: string|AnySDKClass): CPathParticleRope;