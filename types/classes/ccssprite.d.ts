interface CCSSprite {
    readonly "Parent": CSprite;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSSprite(ptr_or_class: string|AnySDKClass): CCSSprite;