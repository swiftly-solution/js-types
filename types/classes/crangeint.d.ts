interface CRangeInt {
    "Value": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRangeInt(ptr_or_class: string|AnySDKClass): CRangeInt;