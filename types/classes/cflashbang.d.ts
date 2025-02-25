interface CFlashbang {
    readonly "Parent": CBaseCSGrenade;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFlashbang(ptr_or_class: string|AnySDKClass): CFlashbang;