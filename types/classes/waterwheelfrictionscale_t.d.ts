interface WaterWheelFrictionScale_t {
    "FractionOfWheelSubmerged": number;
    "FrictionScale": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function WaterWheelFrictionScale_t(ptr_or_class: string|AnySDKClass): WaterWheelFrictionScale_t;