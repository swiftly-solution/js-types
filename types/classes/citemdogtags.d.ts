interface CItemDogtags {
    readonly "OwningPlayer": CCSPlayerPawn;
    readonly "KillingPlayer": CCSPlayerPawn;
    readonly "Parent": CItem;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CItemDogtags(ptr_or_class: string|AnySDKClass): CItemDogtags;