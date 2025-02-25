interface CPropDoorRotating {
    "Axis": Vector;
    "Distance": number;
    "SpawnPosition": number;
    "OpenDirection": number;
    "CurrentOpenDirection": number;
    "AjarAngle": number;
    "RotationAjarDeprecated": QAngle;
    "RotationClosed": QAngle;
    "RotationOpenForward": QAngle;
    "RotationOpenBack": QAngle;
    "Goal": QAngle;
    "ForwardBoundsMin": Vector;
    "ForwardBoundsMax": Vector;
    "BackBoundsMin": Vector;
    "BackBoundsMax": Vector;
    "AjarDoorShouldntAlwaysOpen": boolean;
    readonly "EntityBlocker": CEntityBlocker;
    readonly "Parent": CBasePropDoor;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPropDoorRotating(ptr_or_class: string|AnySDKClass): CPropDoorRotating;