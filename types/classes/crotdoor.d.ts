interface CRotDoor {
    "SolidBsp": boolean;
    readonly "Parent": CBaseDoor;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRotDoor(ptr_or_class: string|AnySDKClass): CRotDoor;