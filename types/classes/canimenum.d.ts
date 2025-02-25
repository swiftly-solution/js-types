interface CAnimEnum {
    "Value": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimEnum(ptr_or_class: string|AnySDKClass): CAnimEnum;