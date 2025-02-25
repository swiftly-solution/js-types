interface CAI_Expresser {
    "StopTalkTime": number;
    "StopTalkTimeWithoutDelay": number;
    "BlockedTalkTime": number;
    "VoicePitch": number;
    "LastTimeAcceptedSpeak": number;
    "AllowSpeakingInterrupts": boolean;
    "ConsiderSceneInvolvementAsSpeech": boolean;
    "SceneEntityDisabled": boolean;
    "LastSpokenPriority": number;
    readonly "Outer": CBaseFlex;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAI_Expresser(ptr_or_class: string|AnySDKClass): CAI_Expresser;