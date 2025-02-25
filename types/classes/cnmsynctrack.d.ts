interface CNmSyncTrack {
    "StartEventOffset": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmSyncTrack(ptr_or_class: string|AnySDKClass): CNmSyncTrack;