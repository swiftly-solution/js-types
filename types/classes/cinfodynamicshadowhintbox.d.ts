interface CInfoDynamicShadowHintBox {
    "BoxMins": Vector;
    "BoxMaxs": Vector;
    readonly "Parent": CInfoDynamicShadowHint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoDynamicShadowHintBox(ptr_or_class: string|AnySDKClass): CInfoDynamicShadowHintBox;