interface CPointEntity {
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointEntity(ptr_or_class: string|AnySDKClass): CPointEntity;