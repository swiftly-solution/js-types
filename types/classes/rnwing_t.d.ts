interface RnWing_t {
    "Index": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnWing_t(ptr_or_class: string|AnySDKClass): RnWing_t;