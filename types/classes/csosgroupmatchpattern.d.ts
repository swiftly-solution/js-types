interface CSosGroupMatchPattern {
    "MatchSoundEventName": string;
    "MatchSoundEventSubString": string;
    "EntIndex": number;
    "Opvar": number;
    "OpvarString": string;
    readonly "Parent": CSosGroupBranchPattern;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSosGroupMatchPattern(ptr_or_class: string|AnySDKClass): CSosGroupMatchPattern;