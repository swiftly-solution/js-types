interface CFuncTrain {
    readonly "CurrentTarget": CBaseEntity;
    "Activated": boolean;
    readonly "Enemy": CBaseEntity;
    "BlockDamage": number;
    "NextBlockTime": number;
    "LastTarget": string;
    readonly "Parent": CBasePlatTrain;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncTrain(ptr_or_class: string|AnySDKClass): CFuncTrain;