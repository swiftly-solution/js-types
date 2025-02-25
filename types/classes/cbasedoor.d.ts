interface CBaseDoor {
    "MoveEntitySpace": QAngle;
    "MoveDirParentSpace": Vector;
    readonly "Ls": locksound_t;
    "ForceClosed": boolean;
    "DoorGroup": boolean;
    "Locked": boolean;
    "IgnoreDebris": boolean;
    "SpawnPosition": number;
    "BlockDamage": number;
    "NoiseMoving": string;
    "NoiseArrived": string;
    "NoiseMovingClosed": string;
    "NoiseArrivedClosed": string;
    "ChainTarget": string;
    readonly "OnBlockedClosing": CEntityIOOutput;
    readonly "OnBlockedOpening": CEntityIOOutput;
    readonly "OnUnblockedClosing": CEntityIOOutput;
    readonly "OnUnblockedOpening": CEntityIOOutput;
    readonly "OnFullyClosed": CEntityIOOutput;
    readonly "OnFullyOpen": CEntityIOOutput;
    readonly "OnClose": CEntityIOOutput;
    readonly "OnOpen": CEntityIOOutput;
    readonly "OnLockedUse": CEntityIOOutput;
    "LoopMoveSound": boolean;
    "CreateNavObstacle": boolean;
    "IsChaining": boolean;
    "IsUsable": boolean;
    readonly "Parent": CBaseToggle;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseDoor(ptr_or_class: string|AnySDKClass): CBaseDoor;