interface CCSPlayerController_InventoryServices {
    "MusicID": number;
    "Rank": Object;
    "PersonaDataPublicLevel": number;
    "PersonaDataPublicCommendsLeader": number;
    "PersonaDataPublicCommendsTeacher": number;
    "PersonaDataPublicCommendsFriendly": number;
    "PersonaDataXpTrailLevel": number;
    "EquippedPlayerSprayIDs": Object;
    readonly "ServerAuthoritativeWeaponSlots": Object;
    readonly "Parent": CPlayerControllerComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayerController_InventoryServices(ptr_or_class: string|AnySDKClass): CCSPlayerController_InventoryServices;