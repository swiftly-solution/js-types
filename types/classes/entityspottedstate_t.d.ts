interface EntitySpottedState_t {
    "Spotted": boolean;
    "SpottedByMask": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EntitySpottedState_t(ptr_or_class: string|AnySDKClass): EntitySpottedState_t;