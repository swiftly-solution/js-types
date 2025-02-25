interface CMapVetoPickController {
    "PlayedIntroVcd": boolean;
    "NeedToPlayFiveSecondsRemaining": boolean;
    "DblPreMatchDraftSequenceTime": number;
    "PreMatchDraftStateChanged": boolean;
    "DraftType": number;
    "TeamWinningCoinToss": number;
    "TeamWithFirstChoice": Object;
    "VoteMapIdsList": Object;
    "AccountIDs": Object;
    "MapId0": Object;
    "MapId1": Object;
    "MapId2": Object;
    "MapId3": Object;
    "MapId4": Object;
    "MapId5": Object;
    "StartingSide0": Object;
    "CurrentPhase": number;
    "PhaseStartTick": number;
    "PhaseDurationTicks": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMapVetoPickController(ptr_or_class: string|AnySDKClass): CMapVetoPickController;