interface CTriggerBrush {
    readonly "OnStartTouch": CEntityIOOutput;
    readonly "OnEndTouch": CEntityIOOutput;
    readonly "OnUse": CEntityIOOutput;
    "InputFilter": number;
    "DontMessageParent": number;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerBrush(ptr_or_class: string|AnySDKClass): CTriggerBrush;