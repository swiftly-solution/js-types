interface dynpitchvol_t {
    readonly "Parent": dynpitchvol_base_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function dynpitchvol_t(ptr_or_class: string|AnySDKClass): dynpitchvol_t;