interface RnSoftbodyCapsule_t {
    "Center": Object;
    "Radius": number;
    "Particle": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnSoftbodyCapsule_t(ptr_or_class: string|AnySDKClass): RnSoftbodyCapsule_t;