interface CRetakeGameRules {
    "MatchSeed": number;
    "BlockersPresent": boolean;
    "RoundInProgress": boolean;
    "FirstSecondHalfRound": number;
    "BombSite": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRetakeGameRules(ptr_or_class: string|AnySDKClass): CRetakeGameRules;