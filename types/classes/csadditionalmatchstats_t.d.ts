interface CSAdditionalMatchStats_t {
    "NumRoundsSurvived": number;
    "MaxNumRoundsSurvived": number;
    "NumRoundsSurvivedTotal": number;
    "RoundsWonWithoutPurchase": number;
    "RoundsWonWithoutPurchaseTotal": number;
    "NumFirstKills": number;
    "NumClutchKills": number;
    "NumPistolKills": number;
    "NumSniperKills": number;
    "NumSuicides": number;
    "NumTeamKills": number;
    "TeamDamage": number;
    readonly "Parent": CSAdditionalPerRoundStats_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSAdditionalMatchStats_t(ptr_or_class: string|AnySDKClass): CSAdditionalMatchStats_t;