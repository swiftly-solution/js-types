interface CPhysImpact {
    "Damage": number;
    "Distance": number;
    "DirectionEntityName": string;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysImpact(ptr_or_class: string|AnySDKClass): CPhysImpact;