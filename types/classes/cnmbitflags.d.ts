interface CNmBitFlags {
    "Flags": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNmBitFlags(ptr_or_class: string|AnySDKClass): CNmBitFlags;