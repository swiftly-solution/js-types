interface CLogicScript {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicScript(ptr_or_class: string|AnySDKClass): CLogicScript;