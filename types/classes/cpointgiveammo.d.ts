interface CPointGiveAmmo {
    readonly "Activator": CBaseEntity;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointGiveAmmo(ptr_or_class: string|AnySDKClass): CPointGiveAmmo;