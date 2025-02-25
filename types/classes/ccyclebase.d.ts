interface CCycleBase {
    "Cycle": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCycleBase(ptr_or_class: string|AnySDKClass): CCycleBase;