interface fogplayerparams_t {
    readonly "Ctrl": CFogController;
    "TransitionTime": number;
    "OldColor": Color;
    "OldStart": number;
    "OldEnd": number;
    "OldMaxDensity": number;
    "OldHDRColorScale": number;
    "OldFarZ": number;
    "NewColor": Color;
    "NewStart": number;
    "NewEnd": number;
    "NewMaxDensity": number;
    "NewHDRColorScale": number;
    "NewFarZ": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function fogplayerparams_t(ptr_or_class: string|AnySDKClass): fogplayerparams_t;