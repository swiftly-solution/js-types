interface SellbackPurchaseEntry_t {
    "DefIdx": number;
    "Cost": number;
    "PrevArmor": number;
    "PrevHelmet": boolean;
    readonly "Item": CEntityInstance;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SellbackPurchaseEntry_t(ptr_or_class: string|AnySDKClass): SellbackPurchaseEntry_t;