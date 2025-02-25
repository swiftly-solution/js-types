interface Dop26_t {
    "Support": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function Dop26_t(ptr_or_class: string|AnySDKClass): Dop26_t;