interface CBuoyancyHelper {
    "FluidType": number;
    "FluidDensity": number;
    readonly "FractionOfWheelSubmergedForWheelFriction": Object;
    readonly "WheelFrictionScales": Object;
    readonly "FractionOfWheelSubmergedForWheelDrag": Object;
    readonly "WheelDrag": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBuoyancyHelper(ptr_or_class: string|AnySDKClass): CBuoyancyHelper;