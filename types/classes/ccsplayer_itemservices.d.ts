interface CCSPlayer_ItemServices {
    "HasDefuser": boolean;
    "HasHelmet": boolean;
    "HasHeavyArmor": boolean;
    readonly "Parent": CPlayer_ItemServices;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayer_ItemServices(ptr_or_class: string|AnySDKClass): CCSPlayer_ItemServices;