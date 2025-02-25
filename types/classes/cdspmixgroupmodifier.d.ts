interface CDSPMixgroupModifier {
    "Mixgroup": string;
    "Modifier": number;
    "ModifierMin": number;
    "SourceModifier": number;
    "SourceModifierMin": number;
    "ListenerReverbModifierWhenSourceReverbIsActive": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDSPMixgroupModifier(ptr_or_class: string|AnySDKClass): CDSPMixgroupModifier;