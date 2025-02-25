interface CHostageExpresserShim {
    readonly "Expresser": CAI_Expresser;
    readonly "Parent": CBaseCombatCharacter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHostageExpresserShim(ptr_or_class: string|AnySDKClass): CHostageExpresserShim;