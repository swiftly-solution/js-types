interface CParticleVecInput {
    "Type": number;
    "LiteralValue": Vector;
    "LiteralColor": Color;
    "FollowNamedValue": boolean;
    readonly "VectorAttribute": ParticleAttributeIndex_t;
    "VectorAttributeScale": Vector;
    "ControlPoint": number;
    "DeltaControlPoint": number;
    "CPValueScale": Vector;
    "CPRelativePosition": Vector;
    "CPRelativeDir": Vector;
    readonly "FloatComponentX": CParticleFloatInput;
    readonly "FloatComponentY": CParticleFloatInput;
    readonly "FloatComponentZ": CParticleFloatInput;
    readonly "FloatInterp": CParticleFloatInput;
    "InterpInput0": number;
    "InterpInput1": number;
    "InterpOutput0": Vector;
    "InterpOutput1": Vector;
    "RandomMin": Vector;
    "RandomMax": Vector;
    readonly "Parent": CParticleInput;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleVecInput(ptr_or_class: string|AnySDKClass): CParticleVecInput;