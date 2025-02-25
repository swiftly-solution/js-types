interface CModelConfigElement_SetRenderColor {
    "Color": Color;
    readonly "Parent": CModelConfigElement;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CModelConfigElement_SetRenderColor(ptr_or_class: string|AnySDKClass): CModelConfigElement_SetRenderColor;