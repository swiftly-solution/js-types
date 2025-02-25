interface CPhysMotor {
    "NameAttach": string;
    readonly "AttachedObject": CBaseEntity;
    "SpinUp": number;
    "AdditionalAcceleration": number;
    "AngularAcceleration": number;
    "LastTime": number;
    readonly "Motor": CMotorController;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysMotor(ptr_or_class: string|AnySDKClass): CPhysMotor;