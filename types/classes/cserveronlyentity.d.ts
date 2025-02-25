interface CServerOnlyEntity {
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CServerOnlyEntity(ptr_or_class: string|AnySDKClass): CServerOnlyEntity;