interface CSosGroupActionLimitSchema {
    "MaxCount": number;
    "StopType": number;
    "SortType": number;
    readonly "Parent": CSosGroupActionSchema;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSosGroupActionLimitSchema(ptr_or_class: string|AnySDKClass): CSosGroupActionLimitSchema;