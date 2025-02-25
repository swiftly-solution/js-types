interface CSosGroupActionSoundeventMinMaxValuesSchema {
    "StrQueryPublicFieldName": string;
    "StrDelayPublicFieldName": string;
    "ExcludeStoppedSounds": boolean;
    "ExcludeDelayedSounds": boolean;
    "ExcludeSoundsBelowThreshold": boolean;
    "ExcludeSoundsMinThresholdValue": number;
    "ExcludSoundsAboveThreshold": boolean;
    "ExcludeSoundsMaxThresholdValue": number;
    "StrMinValueName": string;
    "StrMaxValueName": string;
    readonly "Parent": CSosGroupActionSchema;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSosGroupActionSoundeventMinMaxValuesSchema(ptr_or_class: string|AnySDKClass): CSosGroupActionSoundeventMinMaxValuesSchema;