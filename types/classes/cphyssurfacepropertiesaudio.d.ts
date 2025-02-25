interface CPhysSurfacePropertiesAudio {
    "Reflectivity": number;
    "HardnessFactor": number;
    "RoughnessFactor": number;
    "RoughThreshold": number;
    "HardThreshold": number;
    "HardVelocityThreshold": number;
    "StaticImpactVolume": number;
    "OcclusionFactor": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysSurfacePropertiesAudio(ptr_or_class: string|AnySDKClass): CPhysSurfacePropertiesAudio;