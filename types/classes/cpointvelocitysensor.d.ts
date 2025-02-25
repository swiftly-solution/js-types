interface CPointVelocitySensor {
    readonly "TargetEntity": CBaseEntity;
    "Axis": Vector;
    "Enabled": boolean;
    "PrevVelocity": number;
    "AvgInterval": number;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointVelocitySensor(ptr_or_class: string|AnySDKClass): CPointVelocitySensor;