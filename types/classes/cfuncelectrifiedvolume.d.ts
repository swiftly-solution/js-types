interface CFuncElectrifiedVolume {
    "EffectName": string;
    "EffectInterpenetrateName": string;
    "EffectZapName": string;
    "EffectSource": string;
    readonly "Parent": CFuncBrush;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncElectrifiedVolume(ptr_or_class: string|AnySDKClass): CFuncElectrifiedVolume;