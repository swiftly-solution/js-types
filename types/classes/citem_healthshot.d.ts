interface CItem_Healthshot {
    readonly "Parent": CWeaponBaseItem;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CItem_Healthshot(ptr_or_class: string|AnySDKClass): CItem_Healthshot;