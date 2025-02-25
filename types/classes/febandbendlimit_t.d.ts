interface FeBandBendLimit_t {
    "DistMin": number;
    "DistMax": number;
    "Node": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeBandBendLimit_t(ptr_or_class: string|AnySDKClass): FeBandBendLimit_t;