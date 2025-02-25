interface CFuncPropRespawnZone {
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncPropRespawnZone(ptr_or_class: string|AnySDKClass): CFuncPropRespawnZone;