interface CSosGroupBranchPattern {
    "MatchEventName": boolean;
    "MatchEventSubString": boolean;
    "MatchEntIndex": boolean;
    "MatchOpvar": boolean;
    "MatchString": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSosGroupBranchPattern(ptr_or_class: string|AnySDKClass): CSosGroupBranchPattern;