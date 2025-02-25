interface EntComponentInfo_t {
    "Name": string;
    "CPPClassname": string;
    "NetworkDataReferencedDescription": string;
    "NetworkDataReferencedPtrPropDescription": string;
    "RuntimeIndex": number;
    "Flags": number;
    readonly "BaseClassComponentHelper": CEntityComponentHelper;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function EntComponentInfo_t(ptr_or_class: string|AnySDKClass): EntComponentInfo_t;