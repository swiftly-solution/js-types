interface CBasePropDoor {
    "AutoReturnDelay": number;
    "HardwareType": number;
    "NeedsHardware": boolean;
    "DoorState": number;
    "Locked": boolean;
    "ClosedPosition": Vector;
    "ClosedAngles": QAngle;
    readonly "Blocker": CBaseEntity;
    "FirstBlocked": boolean;
    readonly "Ls": locksound_t;
    "ForceClosed": boolean;
    "LatchWorldPosition": Vector;
    readonly "Activator": CBaseEntity;
    "SoundMoving": string;
    "SoundOpen": string;
    "SoundClose": string;
    "SoundLock": string;
    "SoundUnlock": string;
    "SoundLatch": string;
    "SoundPound": string;
    "SoundJiggle": string;
    "SoundLockedAnim": string;
    "NumCloseAttempts": number;
    "PhysicsMaterial": number;
    "SlaveName": string;
    readonly "Master": CBasePropDoor;
    readonly "OnBlockedClosing": CEntityIOOutput;
    readonly "OnBlockedOpening": CEntityIOOutput;
    readonly "OnUnblockedClosing": CEntityIOOutput;
    readonly "OnUnblockedOpening": CEntityIOOutput;
    readonly "OnFullyClosed": CEntityIOOutput;
    readonly "OnFullyOpen": CEntityIOOutput;
    readonly "OnClose": CEntityIOOutput;
    readonly "OnOpen": CEntityIOOutput;
    readonly "OnLockedUse": CEntityIOOutput;
    readonly "OnAjarOpen": CEntityIOOutput;
    readonly "Parent": CDynamicProp;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBasePropDoor(ptr_or_class: string|AnySDKClass): CBasePropDoor;