interface CSosGroupActionSetSoundeventParameterSchema {
    "MaxCount": number;
    "MinValue": number;
    "MaxValue": number;
    "OpvarName": string;
    "SortType": number;
    readonly "Parent": CSosGroupActionSchema;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSosGroupActionSetSoundeventParameterSchema(ptr_or_class: string|AnySDKClass): CSosGroupActionSetSoundeventParameterSchema;