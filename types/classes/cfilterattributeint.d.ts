interface CFilterAttributeInt {
    "AttributeName": number;
    readonly "Parent": CBaseFilter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFilterAttributeInt(ptr_or_class: string|AnySDKClass): CFilterAttributeInt;