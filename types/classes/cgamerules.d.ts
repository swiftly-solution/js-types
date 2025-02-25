interface CGameRules {
    readonly "__pChainEntity": CNetworkVarChainer;
    "QuestName": string;
    "QuestPhase": number;
    "TotalPausedTicks": number;
    "PauseStartTick": number;
    "GamePaused": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGameRules(ptr_or_class: string|AnySDKClass): CGameRules;