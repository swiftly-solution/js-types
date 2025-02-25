interface CSmokeGrenade {
    readonly "Parent": CBaseCSGrenade;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSmokeGrenade(ptr_or_class: string|AnySDKClass): CSmokeGrenade;