interface CSoundOpvarSetEntity {
    "StackName": string;
    "OperatorName": string;
    "OpvarName": string;
    "OpvarType": number;
    "OpvarIndex": number;
    "OpvarValue": number;
    "OpvarValueString": string;
    "SetOnSpawn": boolean;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundOpvarSetEntity(ptr_or_class: string|AnySDKClass): CSoundOpvarSetEntity;