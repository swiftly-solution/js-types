interface IWeaponManager {
    GetWeapons: () => Object[]; // Weapon
    DropWeapons: () => null|undefined;
    RemoveWeapons: () => null|undefined;
    GetInSlot: (slot: gear_slot_t) => Object[]; // Weapon
    GetFIrstInSlot: (slot: gear_slot_t) => Weapon;
    RemoveByItemDefinition: (idx: number) => null|undefined;
    RemoveBySlot: (slot: gear_slot_t) => null|undefined;
    RemoveByClassname: (classname: string) => null|undefined;
    GiveWeapon: (weapon_name: string) => null|undefined;
}
declare const weaponmanager : IWeaponManager