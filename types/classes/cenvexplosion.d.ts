interface CEnvExplosion {
    "Magnitude": number;
    "PlayerDamage": number;
    "RadiusOverride": number;
    "InnerRadius": number;
    "SpriteScale": number;
    "DamageForce": number;
    readonly "Inflictor": CBaseEntity;
    "CustomDamageType": number;
    "CreateDebris": boolean;
    "ExplosionType": string;
    "CustomEffectName": string;
    "CustomSoundName": string;
    "ClassIgnore": number;
    "ClassIgnore2": number;
    "EntityIgnoreName": string;
    readonly "EntityIgnore": CBaseEntity;
    readonly "Parent": CModelPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvExplosion(ptr_or_class: string|AnySDKClass): CEnvExplosion;