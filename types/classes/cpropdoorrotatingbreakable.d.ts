interface CPropDoorRotatingBreakable {
    "Breakable": boolean;
    "IsAbleToCloseAreaPortals": boolean;
    "CurrentDamageState": number;
    readonly "DamageStates": Object;
    readonly "Parent": CPropDoorRotating;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPropDoorRotatingBreakable(ptr_or_class: string|AnySDKClass): CPropDoorRotatingBreakable;