interface CTakeDamageInfo {
    "DamageForce": Vector;
    "DamagePosition": Vector;
    "ReportedPosition": Vector;
    "DamageDirection": Vector;
    readonly "Inflictor": any;
    readonly "Attacker": any;
    readonly "Ability": any;
    "Damage": number;
    "TotalledDamage": number;
    "TotalledDamageAbsorbed": number;
    "BitsDamageType": number;
    "DamageCustom": number;
    "AmmoType": number;
    "OriginalDamage": number;
    "ShouldBleed": boolean;
    "ShouldSpark": boolean;
    "DamageAbsorbed": number;
    "DamageFlags": number;
    "NumObjectsPenetrated": number;
    "FriendlyFireDamageReductionRatio": number;
    "InTakeDamageFlow": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTakeDamageInfo(ptr_or_class: string|AnySDKClass): CTakeDamageInfo;