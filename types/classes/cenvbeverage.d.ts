interface CEnvBeverage {
    "CanInDispenser": boolean;
    "BeverageType": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvBeverage(ptr_or_class: string|AnySDKClass): CEnvBeverage;