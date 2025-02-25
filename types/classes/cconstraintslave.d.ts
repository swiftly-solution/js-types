interface CConstraintSlave {
    "BasePosition": Vector;
    "BoneHash": number;
    "Weight": number;
    "Name": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CConstraintSlave(ptr_or_class: string|AnySDKClass): CConstraintSlave;