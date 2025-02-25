interface RnSoftbodyParticle_t {
    "MassInv": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnSoftbodyParticle_t(ptr_or_class: string|AnySDKClass): RnSoftbodyParticle_t;