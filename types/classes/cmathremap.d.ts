interface CMathRemap {
    "InMin": number;
    "InMax": number;
    "Out1": number;
    "Out2": number;
    "OldInValue": number;
    "Enabled": boolean;
    readonly "OnRoseAboveMin": CEntityIOOutput;
    readonly "OnRoseAboveMax": CEntityIOOutput;
    readonly "OnFellBelowMin": CEntityIOOutput;
    readonly "OnFellBelowMax": CEntityIOOutput;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMathRemap(ptr_or_class: string|AnySDKClass): CMathRemap;