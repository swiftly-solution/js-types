interface CSlowDownOnSlopesUpdateNode {
    "SlowDownStrength": number;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSlowDownOnSlopesUpdateNode(ptr_or_class: string|AnySDKClass): CSlowDownOnSlopesUpdateNode;