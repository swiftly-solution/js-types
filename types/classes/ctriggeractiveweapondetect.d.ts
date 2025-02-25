interface CTriggerActiveWeaponDetect {
    readonly "OnTouchedActiveWeapon": CEntityIOOutput;
    "WeaponClassName": string;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerActiveWeaponDetect(ptr_or_class: string|AnySDKClass): CTriggerActiveWeaponDetect;