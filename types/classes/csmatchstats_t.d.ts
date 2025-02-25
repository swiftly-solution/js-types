interface CSMatchStats_t {
    "Enemy5Ks": number;
    "Enemy4Ks": number;
    "Enemy3Ks": number;
    "EnemyKnifeKills": number;
    "EnemyTaserKills": number;
    "Enemy2Ks": number;
    "Utility_Count": number;
    "Utility_Successes": number;
    "Utility_Enemies": number;
    "Flash_Count": number;
    "Flash_Successes": number;
    "HealthPointsRemovedTotal": number;
    "HealthPointsDealtTotal": number;
    "ShotsFiredTotal": number;
    "ShotsOnTargetTotal": number;
    "1v1Count": number;
    "1v1Wins": number;
    "1v2Count": number;
    "1v2Wins": number;
    "EntryCount": number;
    "EntryWins": number;
    readonly "Parent": CSPerRoundStats_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSMatchStats_t(ptr_or_class: string|AnySDKClass): CSMatchStats_t;