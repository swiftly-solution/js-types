interface CModelConfigElement {
    "ElementName": string;
    readonly "NestedElements": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CModelConfigElement(ptr_or_class: string|AnySDKClass): CModelConfigElement;