interface CTurnHelperUpdateNode {
    "FacingTarget": number;
    "TurnStartTimeOffset": number;
    "TurnDuration": number;
    "MatchChildDuration": boolean;
    "ManualTurnOffset": number;
    "UseManualTurnOffset": boolean;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTurnHelperUpdateNode(ptr_or_class: string|AnySDKClass): CTurnHelperUpdateNode;