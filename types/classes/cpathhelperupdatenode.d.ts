interface CPathHelperUpdateNode {
    "StoppingRadius": number;
    "StoppingSpeedScale": number;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPathHelperUpdateNode(ptr_or_class: string|AnySDKClass): CPathHelperUpdateNode;