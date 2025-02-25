interface CPlayer_WeaponServices {
    readonly "ActiveWeapon": CBasePlayerWeapon;
    readonly "LastWeapon": CBasePlayerWeapon;
    "Ammo": Object;
    "PreventWeaponPickup": boolean;
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayer_WeaponServices(ptr_or_class: string|AnySDKClass): CPlayer_WeaponServices;