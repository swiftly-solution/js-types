interface GeneratedTextureHandle_t {
    "StrBitmapName": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function GeneratedTextureHandle_t(ptr_or_class: string|AnySDKClass): GeneratedTextureHandle_t;