interface CPointAngularVelocitySensor {
    readonly "TargetEntity": CBaseEntity;
    "Threshold": number;
    "LastCompareResult": number;
    "LastFireResult": number;
    "FireTime": number;
    "FireInterval": number;
    "LastAngVelocity": number;
    "LastOrientation": QAngle;
    "Axis": Vector;
    "UseHelper": boolean;
    readonly "OnLessThan": CEntityIOOutput;
    readonly "OnLessThanOrEqualTo": CEntityIOOutput;
    readonly "OnGreaterThan": CEntityIOOutput;
    readonly "OnGreaterThanOrEqualTo": CEntityIOOutput;
    readonly "OnEqualTo": CEntityIOOutput;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointAngularVelocitySensor(ptr_or_class: string|AnySDKClass): CPointAngularVelocitySensor;