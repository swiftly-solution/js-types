interface CTwoBoneIKUpdateNode {
    readonly "OpFixedData": TwoBoneIKSettings_t;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTwoBoneIKUpdateNode(ptr_or_class: string|AnySDKClass): CTwoBoneIKUpdateNode;