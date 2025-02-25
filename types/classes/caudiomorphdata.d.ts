interface CAudioMorphData {
    readonly "Times": Object;
    readonly "NameHashCodes": Object;
    readonly "NameStrings": Object;
    "EaseIn": number;
    "EaseOut": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAudioMorphData(ptr_or_class: string|AnySDKClass): CAudioMorphData;