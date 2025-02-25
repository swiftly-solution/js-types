interface CVariantDefaultAllocator {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVariantDefaultAllocator(ptr_or_class: string|AnySDKClass): CVariantDefaultAllocator;