interface RnSoftbodySpring_t {
    "Particle": Object;
    "Length": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnSoftbodySpring_t(ptr_or_class: string|AnySDKClass): RnSoftbodySpring_t;