interface CDamageRecord {
    readonly "PlayerDamager": CCSPlayerPawn;
    readonly "PlayerRecipient": CCSPlayerPawn;
    readonly "PlayerControllerDamager": CCSPlayerController;
    readonly "PlayerControllerRecipient": CCSPlayerController;
    "PlayerDamagerName": string;
    "PlayerRecipientName": string;
    "DamagerXuid": number;
    "RecipientXuid": number;
    "BulletsDamage": number;
    "Damage": number;
    "ActualHealthRemoved": number;
    "NumHits": number;
    "LastBulletUpdate": number;
    "IsOtherEnemy": boolean;
    "KillType": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDamageRecord(ptr_or_class: string|AnySDKClass): CDamageRecord;