interface CNullEntity {
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNullEntity(ptr_or_class: string|AnySDKClass): CNullEntity;