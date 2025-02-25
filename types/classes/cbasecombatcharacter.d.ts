interface CBaseCombatCharacter {
    "ForceServerRagdoll": boolean;
    "ImpactEnergyScale": number;
    "ApplyStressDamage": boolean;
    "DamageCount": number;
    readonly "VecRelationships": Object;
    "StrRelationships": string;
    "Hull": number;
    "NavHullIdx": number;
    readonly "Parent": CBaseFlex;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseCombatCharacter(ptr_or_class: string|AnySDKClass): CBaseCombatCharacter;