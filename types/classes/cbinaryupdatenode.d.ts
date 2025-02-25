interface CBinaryUpdateNode {
    readonly "Child1": CAnimUpdateNodeRef;
    readonly "Child2": CAnimUpdateNodeRef;
    "TimingBehavior": number;
    "TimingBlend": number;
    "ResetChild1": boolean;
    "ResetChild2": boolean;
    readonly "Parent": CAnimUpdateNodeBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBinaryUpdateNode(ptr_or_class: string|AnySDKClass): CBinaryUpdateNode;