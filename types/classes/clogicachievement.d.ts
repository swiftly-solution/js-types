interface CLogicAchievement {
    "Disabled": boolean;
    "AchievementEventID": string;
    readonly "OnFired": CEntityIOOutput;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicAchievement(ptr_or_class: string|AnySDKClass): CLogicAchievement;