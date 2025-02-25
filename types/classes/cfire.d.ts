interface CFire {
    readonly "Effect": CBaseFire;
    readonly "Owner": CBaseEntity;
    "FireType": number;
    "Fuel": number;
    "DamageTime": number;
    "LastDamage": number;
    "FireSize": number;
    "LastNavUpdateTime": number;
    "HeatLevel": number;
    "HeatAbsorb": number;
    "DamageScale": number;
    "MaxHeat": number;
    "LastHeatLevel": number;
    "AttackTime": number;
    "Enabled": boolean;
    "StartDisabled": boolean;
    "DidActivate": boolean;
    readonly "OnIgnited": CEntityIOOutput;
    readonly "OnExtinguished": CEntityIOOutput;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFire(ptr_or_class: string|AnySDKClass): CFire;