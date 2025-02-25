interface CSoundOpvarSetPointBase {
    "Disabled": boolean;
    readonly "Source": CEntityInstance;
    "SourceEntityName": string;
    "LastPosition": Vector;
    "StackName": string;
    "OperatorName": string;
    "OpvarName": string;
    "OpvarIndex": number;
    "UseAutoCompare": boolean;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundOpvarSetPointBase(ptr_or_class: string|AnySDKClass): CSoundOpvarSetPointBase;