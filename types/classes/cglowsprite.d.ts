interface CGlowSprite {
    "Color": Vector;
    "HorzSize": number;
    "VertSize": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGlowSprite(ptr_or_class: string|AnySDKClass): CGlowSprite;