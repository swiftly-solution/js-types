interface CFuncConveyor {
    "ConveyorModels": string;
    "TransitionDurationSeconds": number;
    "MoveEntitySpace": QAngle;
    "MoveDirEntitySpace": Vector;
    "TargetSpeed": number;
    "TransitionStartTick": number;
    "TransitionDurationTicks": number;
    "TransitionStartSpeed": number;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncConveyor(ptr_or_class: string|AnySDKClass): CFuncConveyor;