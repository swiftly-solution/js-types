interface CSosGroupActionMemberCountEnvelopeSchema {
    "BaseCount": number;
    "TargetCount": number;
    "BaseValue": number;
    "TargetValue": number;
    "Attack": number;
    "Decay": number;
    "ResultVarName": string;
    "SaveToGroup": boolean;
    readonly "Parent": CSosGroupActionSchema;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSosGroupActionMemberCountEnvelopeSchema(ptr_or_class: string|AnySDKClass): CSosGroupActionMemberCountEnvelopeSchema;