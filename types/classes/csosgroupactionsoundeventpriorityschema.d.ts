interface CSosGroupActionSoundeventPrioritySchema {
    "PriorityValue": string;
    "PriorityVolumeScalar": string;
    "PriorityContributeButDontRead": string;
    "PriorityReadButDontContribute": string;
    readonly "Parent": CSosGroupActionSchema;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSosGroupActionSoundeventPrioritySchema(ptr_or_class: string|AnySDKClass): CSosGroupActionSoundeventPrioritySchema;