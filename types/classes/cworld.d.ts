interface CWorld {
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CWorld(ptr_or_class: string|AnySDKClass): CWorld;