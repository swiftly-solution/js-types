interface CDspPresetModifierList {
    "DspName": string;
    readonly "Modifiers": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDspPresetModifierList(ptr_or_class: string|AnySDKClass): CDspPresetModifierList;