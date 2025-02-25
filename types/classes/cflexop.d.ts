interface CFlexOp {
    "OpCode": number;
    "Data": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFlexOp(ptr_or_class: string|AnySDKClass): CFlexOp;