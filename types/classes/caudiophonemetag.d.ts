interface CAudioPhonemeTag {
    "StartTime": number;
    "EndTime": number;
    "PhonemeCode": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAudioPhonemeTag(ptr_or_class: string|AnySDKClass): CAudioPhonemeTag;