interface CInfoPlayerStart {
    "Disabled": boolean;
    "IsMaster": boolean;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoPlayerStart(ptr_or_class: string|AnySDKClass): CInfoPlayerStart;