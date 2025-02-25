interface CTriggerBuoyancy {
    readonly "BuoyancyHelper": CBuoyancyHelper;
    "FluidDensity": number;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerBuoyancy(ptr_or_class: string|AnySDKClass): CTriggerBuoyancy;