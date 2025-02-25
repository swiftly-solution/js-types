interface CGamePlayerZone {
    readonly "OnPlayerInZone": CEntityIOOutput;
    readonly "OnPlayerOutZone": CEntityIOOutput;
    readonly "Parent": CRuleBrushEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGamePlayerZone(ptr_or_class: string|AnySDKClass): CGamePlayerZone;