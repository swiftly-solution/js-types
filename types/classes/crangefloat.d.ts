interface CRangeFloat {
    "Value": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRangeFloat(ptr_or_class: string|AnySDKClass): CRangeFloat;