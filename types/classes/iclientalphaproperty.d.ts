interface IClientAlphaProperty {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IClientAlphaProperty(ptr_or_class: string|AnySDKClass): IClientAlphaProperty;