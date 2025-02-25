interface CBaseAnimGraphController {
    readonly "AnimGraphNetworkedVars": CAnimGraphNetworkedVariables;
    "SequenceFinished": boolean;
    "SoundSyncTime": number;
    "ActiveIKChainMask": number;
    "Sequence": number;
    "SeqStartTime": number;
    "SeqFixedCycle": number;
    "AnimLoopMode": number;
    "PlaybackRate": number;
    "NotifyState": number;
    "NetworkedAnimationInputsChanged": boolean;
    "NetworkedSequenceChanged": boolean;
    "LastUpdateSkipped": boolean;
    "PrevAnimUpdateTime": number;
    readonly "Parent": CSkeletonAnimationController;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseAnimGraphController(ptr_or_class: string|AnySDKClass): CBaseAnimGraphController;