interface CTankTrainAI {
    readonly "Train": CFuncTrackTrain;
    readonly "TargetEntity": CBaseEntity;
    "SoundPlaying": number;
    "StartSoundName": string;
    "EngineSoundName": string;
    "MovementSoundName": string;
    "TargetEntityName": string;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTankTrainAI(ptr_or_class: string|AnySDKClass): CTankTrainAI;