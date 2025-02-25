interface CFuncPlat {
    "Noise": string;
    readonly "Parent": CBasePlatTrain;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncPlat(ptr_or_class: string|AnySDKClass): CFuncPlat;