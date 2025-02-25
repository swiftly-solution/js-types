interface ParticleChildrenInfo_t {
    "Delay": number;
    "EndCap": boolean;
    "DisableChild": boolean;
    "DetailLevel": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ParticleChildrenInfo_t(ptr_or_class: string|AnySDKClass): ParticleChildrenInfo_t;