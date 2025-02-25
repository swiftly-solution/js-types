interface CLogicGameEventListener {
    readonly "OnEventFired": CEntityIOOutput;
    "GameEventName": string;
    "GameEventItem": string;
    "Enabled": boolean;
    "StartDisabled": boolean;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicGameEventListener(ptr_or_class: string|AnySDKClass): CLogicGameEventListener;