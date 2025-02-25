interface CPhysForce {
    "NameAttach": string;
    "Force": number;
    "ForceTime": number;
    readonly "AttachedObject": CBaseEntity;
    "WasRestored": boolean;
    readonly "Integrator": CConstantForceController;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysForce(ptr_or_class: string|AnySDKClass): CPhysForce;