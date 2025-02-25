interface CCSTeam {
    "LastRecievedShorthandedRoundBonus": number;
    "ShorthandedRoundBonusStartRound": number;
    "Surrendered": boolean;
    "TeamMatchStat": string;
    "NumMapVictories": number;
    "ScoreFirstHalf": number;
    "ScoreSecondHalf": number;
    "ScoreOvertime": number;
    "ClanTeamname": string;
    "ClanID": number;
    "TeamFlagImage": string;
    "TeamLogoImage": string;
    "NextResourceTime": number;
    "LastUpdateSentAt": number;
    readonly "Parent": CTeam;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSTeam(ptr_or_class: string|AnySDKClass): CCSTeam;