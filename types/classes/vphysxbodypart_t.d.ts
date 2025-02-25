interface VPhysXBodyPart_t {
    "Flags": number;
    "Mass": number;
    readonly "RnShape": VPhysics2ShapeDef_t;
    "CollisionAttributeIndex": number;
    "Reserved": number;
    "InertiaScale": number;
    "LinearDamping": number;
    "AngularDamping": number;
    "OverrideMassCenter": boolean;
    "MassCenterOverride": Vector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VPhysXBodyPart_t(ptr_or_class: string|AnySDKClass): VPhysXBodyPart_t;