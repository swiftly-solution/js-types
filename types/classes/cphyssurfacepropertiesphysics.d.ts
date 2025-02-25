interface CPhysSurfacePropertiesPhysics {
    "Friction": number;
    "Elasticity": number;
    "Density": number;
    "Thickness": number;
    "SoftContactFrequency": number;
    "SoftContactDampingRatio": number;
    "WheelDrag": number;
    "HeatConductivity": number;
    "Flashpoint": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysSurfacePropertiesPhysics(ptr_or_class: string|AnySDKClass): CPhysSurfacePropertiesPhysics;