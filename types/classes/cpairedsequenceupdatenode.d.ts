interface CPairedSequenceUpdateNode {
    readonly "Parent": CSequenceUpdateNodeBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPairedSequenceUpdateNode(ptr_or_class: string|AnySDKClass): CPairedSequenceUpdateNode;