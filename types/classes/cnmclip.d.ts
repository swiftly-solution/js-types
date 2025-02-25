interface CNmClip {
    "NumFrames": number;
    "Duration": number;
    readonly "TrackCompressionSettings": Object;
    readonly "CompressedPoseOffsets": Object;
    readonly "SyncTrack": CNmSyncTrack;
    readonly "RootMotion": CNmRootMotionData;
    "IsAdditive": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmClip(ptr_or_class: string|AnySDKClass): CNmClip;