interface HitReactFixedSettings_t {
    "WeightListIndex": number;
    "EffectedBoneCount": number;
    "MaxImpactForce": number;
    "MinImpactForce": number;
    "WhipImpactScale": number;
    "CounterRotationScale": number;
    "DistanceFadeScale": number;
    "PropagationScale": number;
    "WhipDelay": number;
    "SpringStrength": number;
    "WhipSpringStrength": number;
    "MaxAngleRadians": number;
    "HipBoneIndex": number;
    "HipBoneTranslationScale": number;
    "HipDipSpringStrength": number;
    "HipDipImpactScale": number;
    "HipDipDelay": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function HitReactFixedSettings_t(ptr_or_class: string|AnySDKClass): HitReactFixedSettings_t;