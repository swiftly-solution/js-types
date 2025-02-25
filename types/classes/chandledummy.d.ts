interface CHandleDummy {
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHandleDummy(ptr_or_class: string|AnySDKClass): CHandleDummy;