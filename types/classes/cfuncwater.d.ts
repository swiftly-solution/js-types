interface CFuncWater {
    readonly "BuoyancyHelper": CBuoyancyHelper;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncWater(ptr_or_class: string|AnySDKClass): CFuncWater;