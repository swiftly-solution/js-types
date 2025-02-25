interface CStopAtGoalUpdateNode {
    "OuterRadius": number;
    "InnerRadius": number;
    "MaxScale": number;
    "MinScale": number;
    readonly "Damping": CAnimInputDamping;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CStopAtGoalUpdateNode(ptr_or_class: string|AnySDKClass): CStopAtGoalUpdateNode;