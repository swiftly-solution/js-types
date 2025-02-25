interface CLogicGameEvent {
    "EventName": string;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicGameEvent(ptr_or_class: string|AnySDKClass): CLogicGameEvent;