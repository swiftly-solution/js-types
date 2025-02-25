interface CAddUpdateNode {
    "FootMotionTiming": number;
    "ApplyToFootMotion": boolean;
    "ApplyChannelsSeparately": boolean;
    "UseModelSpace": boolean;
    "ApplyScale": boolean;
    readonly "Parent": CBinaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAddUpdateNode(ptr_or_class: string|AnySDKClass): CAddUpdateNode;