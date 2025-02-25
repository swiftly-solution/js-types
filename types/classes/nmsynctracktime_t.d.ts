interface NmSyncTrackTime_t {
    "EventIdx": number;
    readonly "PercentageThrough": NmPercent_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function NmSyncTrackTime_t(ptr_or_class: string|AnySDKClass): NmSyncTrackTime_t;