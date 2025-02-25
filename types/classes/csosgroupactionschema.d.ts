interface CSosGroupActionSchema {
    "Name": string;
    "ActionType": number;
    "ActionInstanceType": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSosGroupActionSchema(ptr_or_class: string|AnySDKClass): CSosGroupActionSchema;