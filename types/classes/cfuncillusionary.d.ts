interface CFuncIllusionary {
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncIllusionary(ptr_or_class: string|AnySDKClass): CFuncIllusionary;