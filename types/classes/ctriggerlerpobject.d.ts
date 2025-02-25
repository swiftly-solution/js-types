interface CTriggerLerpObject {
    "LerpTarget": string;
    readonly "LerpTarget1": CBaseEntity;
    "LerpTargetAttachment": string;
    "LerpDuration": number;
    "LerpRestoreMoveType": boolean;
    "SingleLerpObject": boolean;
    readonly "LerpingObjects": Object;
    "LerpEffect": string;
    "LerpSound": string;
    "AttachTouchingObject": boolean;
    readonly "EntityToWaitForDisconnect": CBaseEntity;
    readonly "OnLerpStarted": CEntityIOOutput;
    readonly "OnLerpFinished": CEntityIOOutput;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerLerpObject(ptr_or_class: string|AnySDKClass): CTriggerLerpObject;