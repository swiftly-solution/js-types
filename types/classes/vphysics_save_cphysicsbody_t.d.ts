interface vphysics_save_cphysicsbody_t {
    "OldPointer": number;
    readonly "Parent": RnBodyDesc_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function vphysics_save_cphysicsbody_t(ptr_or_class: string|AnySDKClass): vphysics_save_cphysicsbody_t;