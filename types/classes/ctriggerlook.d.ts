interface CTriggerLook {
    readonly "LookTarget": CBaseEntity;
    "FieldOfView": number;
    "LookTime": number;
    "LookTimeTotal": number;
    "LookTimeLast": number;
    "TimeoutDuration": number;
    "TimeoutFired": boolean;
    "IsLooking": boolean;
    "2DFOV": boolean;
    "UseVelocity": boolean;
    "TestOcclusion": boolean;
    readonly "OnTimeout": CEntityIOOutput;
    readonly "OnStartLook": CEntityIOOutput;
    readonly "OnEndLook": CEntityIOOutput;
    readonly "Parent": CTriggerOnce;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerLook(ptr_or_class: string|AnySDKClass): CTriggerLook;