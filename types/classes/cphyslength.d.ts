interface CPhysLength {
    "Offset": Object;
    "Attach": Vector;
    "AddLength": number;
    "MinLength": number;
    "TotalLength": number;
    "EnableCollision": boolean;
    readonly "Parent": CPhysConstraint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysLength(ptr_or_class: string|AnySDKClass): CPhysLength;