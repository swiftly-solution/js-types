interface CompMatMutatorCondition_t {
    "MutatorCondition": number;
    "StrMutatorConditionContainerName": string;
    "StrMutatorConditionContainerVarName": string;
    "StrMutatorConditionContainerVarValue": string;
    "PassWhenTrue": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CompMatMutatorCondition_t(ptr_or_class: string|AnySDKClass): CompMatMutatorCondition_t;