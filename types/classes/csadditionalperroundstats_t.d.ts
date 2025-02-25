interface CSAdditionalPerRoundStats_t {
    "NumChickensKilled": number;
    "KillsWhileBlind": number;
    "BombCarrierkills": number;
    "BurnDamageInflicted": number;
    "BlastDamageInflicted": number;
    "Dinks": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSAdditionalPerRoundStats_t(ptr_or_class: string|AnySDKClass): CSAdditionalPerRoundStats_t;