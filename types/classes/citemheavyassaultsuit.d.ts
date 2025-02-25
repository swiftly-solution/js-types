interface CItemHeavyAssaultSuit {
    readonly "Parent": CItemAssaultSuit;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CItemHeavyAssaultSuit(ptr_or_class: string|AnySDKClass): CItemHeavyAssaultSuit;