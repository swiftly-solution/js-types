interface CBombTarget {
    readonly "OnBombExplode": CEntityIOOutput;
    readonly "OnBombPlanted": CEntityIOOutput;
    readonly "OnBombDefused": CEntityIOOutput;
    "IsBombSiteB": boolean;
    "IsHeistBombTarget": boolean;
    "BombPlantedHere": boolean;
    "MountTarget": string;
    readonly "InstructorHint": CBaseEntity;
    "BombSiteDesignation": number;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBombTarget(ptr_or_class: string|AnySDKClass): CBombTarget;