interface CNmGraphVariation {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmGraphVariation(ptr_or_class: string|AnySDKClass): CNmGraphVariation;