interface CLogicBranch {
    "InValue": boolean;
    readonly "OnTrue": CEntityIOOutput;
    readonly "OnFalse": CEntityIOOutput;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicBranch(ptr_or_class: string|AnySDKClass): CLogicBranch;