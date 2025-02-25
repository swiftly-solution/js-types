interface CStateUpdateData {
    "Name": string;
    readonly "Script": AnimScriptHandle;
    readonly "TransitionIndices": Object;
    readonly "Actions": Object;
    readonly "StateID": AnimStateID;
    "IsStartState": any;
    "IsEndState": any;
    "IsPassthrough": any;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CStateUpdateData(ptr_or_class: string|AnySDKClass): CStateUpdateData;