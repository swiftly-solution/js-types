interface CModelConfigElement_RandomColor {
    readonly "Parent": CModelConfigElement;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CModelConfigElement_RandomColor(ptr_or_class: string|AnySDKClass): CModelConfigElement_RandomColor;