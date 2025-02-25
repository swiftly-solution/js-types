interface CMovementComponentUpdater {
    readonly "FacingDamping": CAnimInputDamping;
    "DefaultMotorIndex": number;
    "DefaultRunSpeed": number;
    "MoveVarsDisabled": boolean;
    "NetworkPath": boolean;
    "NetworkFacing": boolean;
    readonly "ParamHandles": Object;
    readonly "Parent": CAnimComponentUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMovementComponentUpdater(ptr_or_class: string|AnySDKClass): CMovementComponentUpdater;