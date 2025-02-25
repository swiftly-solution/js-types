interface RnCapsule_t {
    "Center": Object;
    "Radius": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnCapsule_t(ptr_or_class: string|AnySDKClass): RnCapsule_t;