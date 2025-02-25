interface CBaseDMStart {
    "Master": string;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseDMStart(ptr_or_class: string|AnySDKClass): CBaseDMStart;