interface CBaseTrigger {
    "Disabled": boolean;
    "FilterName": string;
    readonly "Filter": CBaseFilter;
    readonly "OnStartTouch": CEntityIOOutput;
    readonly "OnStartTouchAll": CEntityIOOutput;
    readonly "OnEndTouch": CEntityIOOutput;
    readonly "OnEndTouchAll": CEntityIOOutput;
    readonly "OnTouching": CEntityIOOutput;
    readonly "OnTouchingEachEntity": CEntityIOOutput;
    readonly "OnNotTouching": CEntityIOOutput;
    "ClientSidePredicted": boolean;
    readonly "Parent": CBaseToggle;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseTrigger(ptr_or_class: string|AnySDKClass): CBaseTrigger;