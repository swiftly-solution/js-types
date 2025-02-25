interface CSosGroupActionTimeBlockLimitSchema {
    "MaxCount": number;
    "MaxDuration": number;
    readonly "Parent": CSosGroupActionSchema;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSosGroupActionTimeBlockLimitSchema(ptr_or_class: string|AnySDKClass): CSosGroupActionTimeBlockLimitSchema;