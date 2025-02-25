interface CSosGroupActionSoundeventCountSchema {
    "ExcludeStoppedSounds": boolean;
    "StrCountKeyName": string;
    readonly "Parent": CSosGroupActionSchema;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSosGroupActionSoundeventCountSchema(ptr_or_class: string|AnySDKClass): CSosGroupActionSoundeventCountSchema;