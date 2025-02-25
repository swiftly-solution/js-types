interface CMolotovGrenade {
    readonly "Parent": CBaseCSGrenade;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMolotovGrenade(ptr_or_class: string|AnySDKClass): CMolotovGrenade;