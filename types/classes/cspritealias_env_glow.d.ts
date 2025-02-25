interface CSpriteAlias_env_glow {
    readonly "Parent": CSprite;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSpriteAlias_env_glow(ptr_or_class: string|AnySDKClass): CSpriteAlias_env_glow;