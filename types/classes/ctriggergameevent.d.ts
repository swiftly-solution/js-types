interface CTriggerGameEvent {
    "StrStartTouchEventName": string;
    "StrEndTouchEventName": string;
    "StrTriggerID": string;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerGameEvent(ptr_or_class: string|AnySDKClass): CTriggerGameEvent;