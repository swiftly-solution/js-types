interface CTripWireFire {
    readonly "Parent": CBaseCSGrenade;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTripWireFire(ptr_or_class: string|AnySDKClass): CTripWireFire;