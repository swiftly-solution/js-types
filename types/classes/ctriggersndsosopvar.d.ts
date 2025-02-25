interface CTriggerSndSosOpvar {
    "Position": Vector;
    "CenterSize": number;
    "MinVal": number;
    "MaxVal": number;
    "OpvarName": string;
    "StackName": string;
    "OperatorName": string;
    "VolIs2D": boolean;
    "OpvarNameChar": string;
    "StackNameChar": string;
    "OperatorNameChar": string;
    "VecNormPos": Vector;
    "NormCenterSize": number;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerSndSosOpvar(ptr_or_class: string|AnySDKClass): CTriggerSndSosOpvar;