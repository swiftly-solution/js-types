interface CNewParticleEffect {
    readonly "Next": CNewParticleEffect;
    readonly "Prev": CNewParticleEffect;
    readonly "Particles": IParticleCollection;
    "DebugName": string;
    "DontRemove": any;
    "Remove": any;
    "NeedsBBoxUpdate": any;
    "IsFirstFrame": any;
    "AutoUpdateBBox": any;
    "Allocated": any;
    "Simulate": any;
    "ShouldPerformCullCheck": any;
    "ForceNoDraw": any;
    "ShouldSave": any;
    "DisableAggregation": any;
    "ShouldSimulateDuringGamePaused": any;
    "ShouldCheckFoW": any;
    "SortOrigin": Vector;
    "Scale": number;
    readonly "Owner": PARTICLE_EHANDLE__;
    readonly "OwningParticleProperty": CParticleProperty;
    "FreezeTransitionStart": number;
    "FreezeTransitionDuration": number;
    "FreezeTransitionOverride": number;
    "FreezeTransitionActive": boolean;
    "FreezeTargetState": boolean;
    "CanFreeze": boolean;
    "LastMin": Vector;
    "LastMax": Vector;
    "SplitScreenUser": number;
    "AggregationCenter": Vector;
    "RefCount": number;
    readonly "Parent": IParticleEffect;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNewParticleEffect(ptr_or_class: string|AnySDKClass): CNewParticleEffect;