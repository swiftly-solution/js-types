interface CWayPointHelperUpdateNode {
    "StartCycle": number;
    "EndCycle": number;
    "OnlyGoals": boolean;
    "PreventOvershoot": boolean;
    "PreventUndershoot": boolean;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWayPointHelperUpdateNode(ptr_or_class: string|AnySDKClass): CWayPointHelperUpdateNode;