interface CCSGameRules {
    "FreezePeriod": boolean;
    "WarmupPeriod": boolean;
    "WarmupPeriodEnd": number;
    "WarmupPeriodStart": number;
    "ServerPaused": boolean;
    "TerroristTimeOutActive": boolean;
    "CTTimeOutActive": boolean;
    "TerroristTimeOutRemaining": number;
    "CTTimeOutRemaining": number;
    "TerroristTimeOuts": number;
    "CTTimeOuts": number;
    "TechnicalTimeOut": boolean;
    "MatchWaitingForResume": boolean;
    "RoundTime": number;
    "MatchStartTime": number;
    "RoundStartTime": number;
    "RestartRoundTime": number;
    "GameRestart": boolean;
    "GameStartTime": number;
    "TimeUntilNextPhaseStarts": number;
    "GamePhase": number;
    "TotalRoundsPlayed": number;
    "RoundsPlayedThisPhase": number;
    "OvertimePlaying": number;
    "HostagesRemaining": number;
    "AnyHostageReached": boolean;
    "MapHasBombTarget": boolean;
    "MapHasRescueZone": boolean;
    "MapHasBuyZone": boolean;
    "IsQueuedMatchmaking": boolean;
    "QueuedMatchmakingMode": number;
    "IsValveDS": boolean;
    "LogoMap": boolean;
    "PlayAllStepSoundsOnServer": boolean;
    "SpectatorSlotCount": number;
    "MatchDevice": number;
    "HasMatchStarted": boolean;
    "NextMapInMapgroup": number;
    "TournamentEventName": string;
    "TournamentEventStage": string;
    "MatchStatTxt": string;
    "TournamentPredictionsTxt": string;
    "TournamentPredictionsPct": number;
    "CMMItemDropRevealStartTime": number;
    "CMMItemDropRevealEndTime": number;
    "IsDroppingItems": boolean;
    "IsQuestEligible": boolean;
    "IsHltvActive": boolean;
    "ProhibitedItemIndices": Object;
    "TournamentActiveCasterAccounts": Object;
    "NumBestOfMaps": number;
    "HalloweenMaskListSeed": number;
    "BombDropped": boolean;
    "BombPlanted": boolean;
    "RoundWinStatus": number;
    "RoundWinReason": number;
    "TCantBuy": boolean;
    "CTCantBuy": boolean;
    "MatchStats_RoundResults": Object;
    "MatchStats_PlayersAlive_CT": Object;
    "MatchStats_PlayersAlive_T": Object;
    "TeamRespawnWaveTimes": Object;
    "NextRespawnWave": Object;
    "ServerQuestID": number;
    "MinimapMins": Vector;
    "MinimapMaxs": Vector;
    "MinimapVerticalSectionHeights": Object;
    "SpawnedTerrorHuntHeavy": boolean;
    "EndMatchMapGroupVoteTypes": Object;
    "EndMatchMapGroupVoteOptions": Object;
    "EndMatchMapVoteWinner": number;
    "NumConsecutiveCTLoses": number;
    "NumConsecutiveTerroristLoses": number;
    "HasHostageBeenTouched": boolean;
    "IntermissionStartTime": number;
    "IntermissionEndTime": number;
    "LevelInitialized": boolean;
    "TotalRoundsPlayed1": number;
    "UnBalancedRounds": number;
    "EndMatchOnRoundReset": boolean;
    "EndMatchOnThink": boolean;
    "FreezeTime": number;
    "NumTerrorist": number;
    "NumCT": number;
    "NumSpawnableTerrorist": number;
    "NumSpawnableCT": number;
    readonly "SelectedHostageSpawnIndices": Object;
    "SpawnPointsRandomSeed": number;
    "FirstConnected": boolean;
    "CompleteReset": boolean;
    "PickNewTeamsOnReset": boolean;
    "ScrambleTeamsOnRestart": boolean;
    "SwapTeamsOnRestart": boolean;
    readonly "EndMatchTiedVotes": Object;
    "NeedToAskPlayersForContinueVote": boolean;
    "NumQueuedMatchmakingAccounts": number;
    "AvgPlayerRank": number;
    "QueuedMatchmakingReservationString": string;
    "NumTotalTournamentDrops": number;
    "NumSpectatorsCountMax": number;
    "NumSpectatorsCountMaxTV": number;
    "NumSpectatorsCountMaxLnk": number;
    "ForceTeamChangeSilent": boolean;
    "LoadingRoundBackupData": boolean;
    "MatchInfoShowType": number;
    "MatchInfoDecidedTime": number;
    "MTeamDMLastWinningTeamNumber": number;
    "MTeamDMLastThinkTime": number;
    "TeamDMLastAnnouncementTime": number;
    "AccountTerrorist": number;
    "AccountCT": number;
    "SpawnPointCount_Terrorist": number;
    "SpawnPointCount_CT": number;
    "MaxNumTerrorists": number;
    "MaxNumCTs": number;
    "LoserBonusMostRecentTeam": number;
    "TmNextPeriodicThink": number;
    "VoiceWonMatchBragFired": boolean;
    "WarmupNextChatNoticeTime": number;
    "HostagesRescued": number;
    "HostagesTouched": number;
    "NextHostageAnnouncement": number;
    "NoTerroristsKilled": boolean;
    "NoCTsKilled": boolean;
    "NoEnemiesKilled": boolean;
    "CanDonateWeapons": boolean;
    "FirstKillTime": number;
    "FirstBloodTime": number;
    "HostageWasInjured": boolean;
    "HostageWasKilled": boolean;
    "VoteCalled": boolean;
    "ServerVoteOnReset": boolean;
    "VoteCheckThrottle": number;
    "BuyTimeEnded": boolean;
    "LastFreezeEndBeep": number;
    "TargetBombed": boolean;
    "BombDefused": boolean;
    "MapHasBombZone": boolean;
    "MainCTSpawnPos": Vector;
    readonly "CTSpawnPointsMasterList": Object;
    readonly "TerroristSpawnPointsMasterList": Object;
    "RespawningAllRespawnablePlayers": boolean;
    "NextCTSpawnPoint": number;
    "CTSpawnPointUsedTime": number;
    "NextTerroristSpawnPoint": number;
    "TerroristSpawnPointUsedTime": number;
    readonly "CTSpawnPoints": Object;
    readonly "TerroristSpawnPoints": Object;
    "IsUnreservedGameServer": boolean;
    "AutobalanceDisplayTime": number;
    "AllowWeaponSwitch": boolean;
    "RoundTimeWarningTriggered": boolean;
    "PhaseChangeAnnouncementTime": number;
    "NextUpdateTeamClanNamesTime": number;
    "LastThinkTime": number;
    "AccumulatedRoundOffDamage": number;
    "ShorthandedBonusLastEvalRound": number;
    "MatchAbortedEarlyReason": number;
    "HasTriggeredRoundStartMusic": boolean;
    "SwitchingTeamsAtRoundReset": boolean;
    readonly "GameModeRules": CCSGameModeRules;
    readonly "PlayerResource": CBaseEntity;
    readonly "RetakeRules": CRetakeGameRules;
    "TeamLastKillUsedUniqueWeaponMatch": Object;
    "MatchEndCount": number;
    "TTeamIntroVariant": number;
    "CTTeamIntroVariant": number;
    "TeamIntroPeriod": boolean;
    "TeamIntroPeriodEnd": number;
    "PlayedTeamIntroVO": boolean;
    "RoundEndWinnerTeam": number;
    "RoundEndReason": number;
    "RoundEndShowTimerDefend": boolean;
    "RoundEndTimerTime": number;
    "RoundEndFunFactToken": string;
    "RoundEndFunFactPlayerSlot": number;
    "RoundEndFunFactData1": number;
    "RoundEndFunFactData2": number;
    "RoundEndFunFactData3": number;
    "RoundEndMessage": string;
    "RoundEndPlayerCount": number;
    "RoundEndNoMusic": boolean;
    "RoundEndLegacy": number;
    "RoundEndCount": number;
    "RoundStartRoundNumber": number;
    "RoundStartCount": number;
    "LastPerfSampleTime": number;
    readonly "Parent": CTeamplayRules;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGameRules(ptr_or_class: string|AnySDKClass): CCSGameRules;