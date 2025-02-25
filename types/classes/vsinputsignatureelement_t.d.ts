interface VsInputSignatureElement_t {
    "Name": string;
    "Semantic": string;
    "D3DSemanticName": string;
    "D3DSemanticIndex": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VsInputSignatureElement_t(ptr_or_class: string|AnySDKClass): VsInputSignatureElement_t;