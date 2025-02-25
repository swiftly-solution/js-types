interface CProductQuantizer {
    readonly "SubQuantizers": Object;
    "Dimensions": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CProductQuantizer(ptr_or_class: string|AnySDKClass): CProductQuantizer;