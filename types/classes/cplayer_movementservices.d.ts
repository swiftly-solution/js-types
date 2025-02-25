interface CPlayer_MovementServices {
    "Impulse": number;
    readonly "Buttons": CInButtonState;
    "QueuedButtonDownMask": number;
    "QueuedButtonChangeMask": number;
    "ButtonDoublePressed": number;
    "ButtonPressedCmdNumber": Object;
    "LastCommandNumberProcessed": number;
    "ToggleButtonDownMask": number;
    "Maxspeed": number;
    "ForceSubtickMoveWhen": Object;
    "ForwardMove": number;
    "LeftMove": number;
    "UpMove": number;
    "LastMovementImpulses": Vector;
    "OldViewAngles": QAngle;
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayer_MovementServices(ptr_or_class: string|AnySDKClass): CPlayer_MovementServices;