interface CItemAssaultSuit {
    readonly "Parent": CItem;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CItemAssaultSuit(ptr_or_class: string|AnySDKClass): CItemAssaultSuit;