interface CPointAngleSensor {
    "Disabled": boolean;
    "LookAtName": string;
    readonly "TargetEntity": CBaseEntity;
    readonly "LookAtEntity": CBaseEntity;
    "Duration": number;
    "DotTolerance": number;
    "FacingTime": number;
    "Fired": boolean;
    readonly "OnFacingLookat": CEntityIOOutput;
    readonly "OnNotFacingLookat": CEntityIOOutput;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointAngleSensor(ptr_or_class: string|AnySDKClass): CPointAngleSensor;