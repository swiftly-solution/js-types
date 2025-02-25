interface CPhysExplosion {
    "ExplodeOnSpawn": boolean;
    "Magnitude": number;
    "Damage": number;
    "Radius": number;
    "TargetEntityName": string;
    "InnerRadius": number;
    "PushScale": number;
    "ConvertToDebrisWhenPossible": boolean;
    readonly "OnPushedPlayer": CEntityIOOutput;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysExplosion(ptr_or_class: string|AnySDKClass): CPhysExplosion;