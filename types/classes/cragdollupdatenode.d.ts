interface CRagdollUpdateNode {
    "WeightListIndex": number;
    "PoseControlMethod": number;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRagdollUpdateNode(ptr_or_class: string|AnySDKClass): CRagdollUpdateNode;