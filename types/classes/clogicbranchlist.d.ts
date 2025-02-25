interface CLogicBranchList {
    "LogicBranchNames": Object;
    readonly "OnAllTrue": CEntityIOOutput;
    readonly "OnAllFalse": CEntityIOOutput;
    readonly "OnMixed": CEntityIOOutput;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicBranchList(ptr_or_class: string|AnySDKClass): CLogicBranchList;