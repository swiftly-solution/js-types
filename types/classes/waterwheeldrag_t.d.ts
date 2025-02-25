interface WaterWheelDrag_t {
    "FractionOfWheelSubmerged": number;
    "WheelDrag": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function WaterWheelDrag_t(ptr_or_class: string|AnySDKClass): WaterWheelDrag_t;