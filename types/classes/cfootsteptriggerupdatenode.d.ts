interface CFootStepTriggerUpdateNode {
    readonly "Triggers": Object;
    "Tolerance": number;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootStepTriggerUpdateNode(ptr_or_class: string|AnySDKClass): CFootStepTriggerUpdateNode;