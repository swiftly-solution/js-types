interface CSoundEventMetaData {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundEventMetaData(ptr_or_class: string|AnySDKClass): CSoundEventMetaData;