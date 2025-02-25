interface CSequenceUpdateNode {
    "Sequence": number;
    "Duration": number;
    readonly "ParamSpans": CParamSpanUpdater;
    readonly "Tags": Object;
    readonly "Parent": CSequenceUpdateNodeBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSequenceUpdateNode(ptr_or_class: string|AnySDKClass): CSequenceUpdateNode;