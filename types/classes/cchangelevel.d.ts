interface CChangeLevel {
    "MapName": string;
    "LandmarkName": string;
    readonly "OnChangeLevel": CEntityIOOutput;
    "Touched": boolean;
    "NoTouch": boolean;
    "NewChapter": boolean;
    "OnChangeLevelFired": boolean;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CChangeLevel(ptr_or_class: string|AnySDKClass): CChangeLevel;