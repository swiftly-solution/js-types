interface CDynamicProp {
    "CreateNavObstacle": boolean;
    "NavObstacleUpdatesOverridden": boolean;
    "UseHitboxesForRenderBox": boolean;
    "UseAnimGraph": boolean;
    readonly "OutputAnimBegun": CEntityIOOutput;
    readonly "OutputAnimOver": CEntityIOOutput;
    readonly "OutputAnimLoopCycleOver": CEntityIOOutput;
    readonly "OnAnimReachedStart": CEntityIOOutput;
    readonly "OnAnimReachedEnd": CEntityIOOutput;
    "IdleAnim": string;
    "IdleAnimLoopMode": number;
    "RandomizeCycle": boolean;
    "StartDisabled": boolean;
    "FiredStartEndOutput": boolean;
    "ForceNpcExclude": boolean;
    "CreateNonSolid": boolean;
    "IsOverrideProp": boolean;
    "InitialGlowState": number;
    "GlowRange": number;
    "GlowRangeMin": number;
    "GlowColor": Color;
    "GlowTeam": number;
    readonly "Parent": CBreakableProp;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDynamicProp(ptr_or_class: string|AnySDKClass): CDynamicProp;