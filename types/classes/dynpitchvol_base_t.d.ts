interface dynpitchvol_base_t {
    "Preset": number;
    "Pitchrun": number;
    "Pitchstart": number;
    "Spinup": number;
    "Spindown": number;
    "Volrun": number;
    "Volstart": number;
    "Fadein": number;
    "Fadeout": number;
    "Lfotype": number;
    "Lforate": number;
    "Lfomodpitch": number;
    "Lfomodvol": number;
    "Cspinup": number;
    "Cspincount": number;
    "Pitch": number;
    "Spinupsav": number;
    "Spindownsav": number;
    "Pitchfrac": number;
    "Vol": number;
    "Fadeinsav": number;
    "Fadeoutsav": number;
    "Volfrac": number;
    "Lfofrac": number;
    "Lfomult": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function dynpitchvol_base_t(ptr_or_class: string|AnySDKClass): dynpitchvol_base_t;