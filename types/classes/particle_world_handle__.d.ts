interface PARTICLE_WORLD_HANDLE__ {
    "Unused": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PARTICLE_WORLD_HANDLE__(ptr_or_class: string|AnySDKClass): PARTICLE_WORLD_HANDLE__;