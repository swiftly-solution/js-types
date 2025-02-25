interface CTriggerPhysics {
    "GravityScale": number;
    "LinearLimit": number;
    "LinearDamping": number;
    "AngularLimit": number;
    "AngularDamping": number;
    "LinearForce": number;
    "Frequency": number;
    "DampingRatio": number;
    "LinearForcePointAt": Vector;
    "CollapseToForcePoint": boolean;
    "LinearForcePointAtWorld": Vector;
    "LinearForceDirection": Vector;
    "ConvertToDebrisWhenPossible": boolean;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerPhysics(ptr_or_class: string|AnySDKClass): CTriggerPhysics;