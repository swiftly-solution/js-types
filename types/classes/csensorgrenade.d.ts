interface CSensorGrenade {
    readonly "Parent": CBaseCSGrenade;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSensorGrenade(ptr_or_class: string|AnySDKClass): CSensorGrenade;