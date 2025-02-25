interface CConstraintTarget {
    "Offset": Vector;
    "BoneHash": number;
    "Name": string;
    "Weight": number;
    "IsAttachment": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CConstraintTarget(ptr_or_class: string|AnySDKClass): CConstraintTarget;