interface CSubtractUpdateNode {
    "FootMotionTiming": number;
    "ApplyToFootMotion": boolean;
    "ApplyChannelsSeparately": boolean;
    "UseModelSpace": boolean;
    readonly "Parent": CBinaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSubtractUpdateNode(ptr_or_class: string|AnySDKClass): CSubtractUpdateNode;