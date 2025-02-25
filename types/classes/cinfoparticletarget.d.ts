interface CInfoParticleTarget {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoParticleTarget(ptr_or_class: string|AnySDKClass): CInfoParticleTarget;