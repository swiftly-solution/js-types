interface CLogicEventListener {
    "StrEventName": string;
    "IsEnabled": boolean;
    "Team": number;
    readonly "OnEventFired": CEntityIOOutput;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicEventListener(ptr_or_class: string|AnySDKClass): CLogicEventListener;