interface Weapon {

    CBasePlayerWeapon: () => CBasePlayerWeapon;
    CCSWeaponBase: () => CCSWeaponBase;
    CBasePlayerWeaponVData: () => CBasePlayerWeaponVData;
    CCSWeaponBaseVData: () => CCSWeaponBaseVData;
    SetDefaultAttributes: () => null|undefined;
    Remove: () => null|undefined;
    Drop: () => null|undefined;
}

declare function Weapon(playerid: number,ptr: string): Weapon;