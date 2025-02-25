interface CLogicPlayerProxy {
    readonly "Player": CBaseEntity;
    readonly "PlayerHasAmmo": CEntityIOOutput;
    readonly "PlayerHasNoAmmo": CEntityIOOutput;
    readonly "PlayerDied": CEntityIOOutput;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicPlayerProxy(ptr_or_class: string|AnySDKClass): CLogicPlayerProxy;