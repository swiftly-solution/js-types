interface CSoundEventParameter {
    "ParamName": string;
    "FloatValue": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundEventParameter(ptr_or_class: string|AnySDKClass): CSoundEventParameter;