interface CSosGroupActionTimeLimitSchema {
    "MaxDuration": number;
    readonly "Parent": CSosGroupActionSchema;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSosGroupActionTimeLimitSchema(ptr_or_class: string|AnySDKClass): CSosGroupActionTimeLimitSchema;