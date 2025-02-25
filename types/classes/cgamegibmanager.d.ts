interface CGameGibManager {
    "AllowNewGibs": boolean;
    "CurrentMaxPieces": number;
    "MaxPieces": number;
    "LastFrame": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGameGibManager(ptr_or_class: string|AnySDKClass): CGameGibManager;