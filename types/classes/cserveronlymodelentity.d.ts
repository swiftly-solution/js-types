interface CServerOnlyModelEntity {
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CServerOnlyModelEntity(ptr_or_class: string|AnySDKClass): CServerOnlyModelEntity;