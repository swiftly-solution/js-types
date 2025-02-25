interface CompositeMaterialInputContainer_t {
    "Enabled": boolean;
    "CompositeMaterialInputContainerSourceType": number;
    "StrAttrName": string;
    "StrAlias": string;
    readonly "LooseVariables": Object;
    "StrAttrNameForVar": string;
    "ExposeExternally": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CompositeMaterialInputContainer_t(ptr_or_class: string|AnySDKClass): CompositeMaterialInputContainer_t;