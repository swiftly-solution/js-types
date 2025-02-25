interface CCSPlayer_BuyServices {
    readonly "SellbackPurchaseEntries": Object;
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayer_BuyServices(ptr_or_class: string|AnySDKClass): CCSPlayer_BuyServices;