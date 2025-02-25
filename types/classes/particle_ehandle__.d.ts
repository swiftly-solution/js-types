interface PARTICLE_EHANDLE__ {
    "Unused": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PARTICLE_EHANDLE__(ptr_or_class: string|AnySDKClass): PARTICLE_EHANDLE__;