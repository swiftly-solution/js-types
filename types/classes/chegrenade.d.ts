interface CHEGrenade {
    readonly "Parent": CBaseCSGrenade;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHEGrenade(ptr_or_class: string|AnySDKClass): CHEGrenade;