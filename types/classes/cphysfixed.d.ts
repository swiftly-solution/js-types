interface CPhysFixed {
    "LinearFrequency": number;
    "LinearDampingRatio": number;
    "AngularFrequency": number;
    "AngularDampingRatio": number;
    "EnableLinearConstraint": boolean;
    "EnableAngularConstraint": boolean;
    readonly "Parent": CPhysConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysFixed(ptr_or_class: string|AnySDKClass): CPhysFixed;