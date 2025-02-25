interface CSpriteOriented {
    readonly "Parent": CSprite;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSpriteOriented(ptr_or_class: string|AnySDKClass): CSpriteOriented;