interface CParticleTransformInput {
    "Type": number;
    "FollowNamedValue": boolean;
    "SupportsDisabled": boolean;
    "UseOrientation": boolean;
    "ControlPoint": number;
    "ControlPointRangeMax": number;
    "EndCPGrowthTime": number;
    readonly "Parent": CParticleInput;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CParticleTransformInput(ptr_or_class: string|AnySDKClass): CParticleTransformInput;