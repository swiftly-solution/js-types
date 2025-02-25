interface CPlayerControllerComponent {
    readonly "__pChainEntity": CNetworkVarChainer;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayerControllerComponent(ptr_or_class: string|AnySDKClass): CPlayerControllerComponent;