interface CBlood {
    "SprayAngles": QAngle;
    "SprayDir": Vector;
    "Amount": number;
    "Color": number;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBlood(ptr_or_class: string|AnySDKClass): CBlood;