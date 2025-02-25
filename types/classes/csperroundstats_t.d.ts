interface CSPerRoundStats_t {
    "Kills": number;
    "Deaths": number;
    "Assists": number;
    "Damage": number;
    "EquipmentValue": number;
    "MoneySaved": number;
    "KillReward": number;
    "LiveTime": number;
    "HeadShotKills": number;
    "Objective": number;
    "CashEarned": number;
    "UtilityDamage": number;
    "EnemiesFlashed": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSPerRoundStats_t(ptr_or_class: string|AnySDKClass): CSPerRoundStats_t;