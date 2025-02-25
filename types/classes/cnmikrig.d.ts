interface CNmIKRig {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmIKRig(ptr_or_class: string|AnySDKClass): CNmIKRig;