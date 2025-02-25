interface CPointProximitySensor {
    "Disabled": boolean;
    readonly "TargetEntity": CBaseEntity;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointProximitySensor(ptr_or_class: string|AnySDKClass): CPointProximitySensor;