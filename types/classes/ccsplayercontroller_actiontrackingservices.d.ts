interface CCSPlayerController_ActionTrackingServices {
    readonly "PerRoundStats": Object;
    readonly "MatchStats": CSMatchStats_t;
    "NumRoundKills": number;
    "NumRoundKillsHeadshots": number;
    "TotalRoundDamageDealt": number;
    readonly "Parent": CPlayerControllerComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayerController_ActionTrackingServices(ptr_or_class: string|AnySDKClass): CCSPlayerController_ActionTrackingServices;