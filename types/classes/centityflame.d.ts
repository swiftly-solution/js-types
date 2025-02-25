interface CEntityFlame {
    readonly "EntAttached": CBaseEntity;
    "CheapEffect": boolean;
    "Size": number;
    "UseHitboxes": boolean;
    "NumHitboxFires": number;
    "HitboxFireScale": number;
    "Lifetime": number;
    readonly "Attacker": CBaseEntity;
    "DangerSound": number;
    "DirectDamagePerSecond": number;
    "CustomDamageType": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEntityFlame(ptr_or_class: string|AnySDKClass): CEntityFlame;