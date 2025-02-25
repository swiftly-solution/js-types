interface CSetParameterActionUpdater {
    readonly "Param": CAnimParamHandle;
    readonly "Parent": CAnimActionUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSetParameterActionUpdater(ptr_or_class: string|AnySDKClass): CSetParameterActionUpdater;