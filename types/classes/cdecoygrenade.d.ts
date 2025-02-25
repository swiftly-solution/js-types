interface CDecoyGrenade {
    readonly "Parent": CBaseCSGrenade;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDecoyGrenade(ptr_or_class: string|AnySDKClass): CDecoyGrenade;