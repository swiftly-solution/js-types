interface CTriggerPush {
    "PushEntitySpace": QAngle;
    "PushDirEntitySpace": Vector;
    "TriggerOnStartTouch": boolean;
    "UsePathSimple": boolean;
    "PathSimpleName": string;
    readonly "PathSimple": CPathSimple;
    "SplinePushType": number;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerPush(ptr_or_class: string|AnySDKClass): CTriggerPush;