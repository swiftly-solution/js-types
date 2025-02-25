interface CFuncTrackChange {
    readonly "TrackTop": CPathTrack;
    readonly "TrackBottom": CPathTrack;
    readonly "Train": CFuncTrackTrain;
    "TrackTopName": string;
    "TrackBottomName": string;
    "TrainName": string;
    "Code": number;
    "TargetState": number;
    "Use": number;
    readonly "Parent": CFuncPlatRot;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncTrackChange(ptr_or_class: string|AnySDKClass): CFuncTrackChange;