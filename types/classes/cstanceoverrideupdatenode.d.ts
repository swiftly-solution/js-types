interface CStanceOverrideUpdateNode {
    readonly "FootStanceInfo": Object;
    readonly "StanceSourceNode": CAnimUpdateNodeRef;
    readonly "Parameter": CAnimParamHandle;
    "Mode": number;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CStanceOverrideUpdateNode(ptr_or_class: string|AnySDKClass): CStanceOverrideUpdateNode;