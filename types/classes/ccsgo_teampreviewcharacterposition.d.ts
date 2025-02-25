interface CCSGO_TeamPreviewCharacterPosition {
    "Variant": number;
    "Random": number;
    "Ordinal": number;
    "WeaponName": string;
    "Xuid": number;
    readonly "AgentItem": CEconItemView;
    readonly "GlovesItem": CEconItemView;
    readonly "WeaponItem": CEconItemView;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGO_TeamPreviewCharacterPosition(ptr_or_class: string|AnySDKClass): CCSGO_TeamPreviewCharacterPosition;