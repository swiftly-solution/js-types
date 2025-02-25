interface CModelPointEntity {
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CModelPointEntity(ptr_or_class: string|AnySDKClass): CModelPointEntity;