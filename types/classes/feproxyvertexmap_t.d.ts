interface FeProxyVertexMap_t {
    "Name": string;
    "Weight": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeProxyVertexMap_t(ptr_or_class: string|AnySDKClass): FeProxyVertexMap_t;