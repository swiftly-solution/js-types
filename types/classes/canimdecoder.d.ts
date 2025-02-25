interface CAnimDecoder {
    "Version": number;
    "Type": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimDecoder(ptr_or_class: string|AnySDKClass): CAnimDecoder;