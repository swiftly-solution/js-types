interface NmSyncTrackTimeRange_t {
    readonly "StartTime": NmSyncTrackTime_t;
    readonly "EndTime": NmSyncTrackTime_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function NmSyncTrackTimeRange_t(ptr_or_class: string|AnySDKClass): NmSyncTrackTimeRange_t;