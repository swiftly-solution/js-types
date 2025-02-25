interface CSoundInfoHeader {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundInfoHeader(ptr_or_class: string|AnySDKClass): CSoundInfoHeader;