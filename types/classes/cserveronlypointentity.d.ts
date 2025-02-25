interface CServerOnlyPointEntity {
    readonly "Parent": CServerOnlyEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CServerOnlyPointEntity(ptr_or_class: string|AnySDKClass): CServerOnlyPointEntity;