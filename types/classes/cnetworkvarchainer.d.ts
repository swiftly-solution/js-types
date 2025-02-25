interface CNetworkVarChainer {
    readonly "PathIndex": ChangeAccessorFieldPathIndex_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNetworkVarChainer(ptr_or_class: string|AnySDKClass): CNetworkVarChainer;