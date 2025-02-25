interface IHasAttributes {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IHasAttributes(ptr_or_class: string|AnySDKClass): IHasAttributes;