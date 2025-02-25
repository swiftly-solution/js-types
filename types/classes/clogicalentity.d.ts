interface CLogicalEntity {
    readonly "Parent": CServerOnlyEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicalEntity(ptr_or_class: string|AnySDKClass): CLogicalEntity;