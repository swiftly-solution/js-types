interface GameAmmoTypeInfo_t {
    "BuySize": number;
    "Cost": number;
    readonly "Parent": AmmoTypeInfo_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function GameAmmoTypeInfo_t(ptr_or_class: string|AnySDKClass): GameAmmoTypeInfo_t;