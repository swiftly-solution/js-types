interface CPlayerPawnComponent {
    readonly "__pChainEntity": CNetworkVarChainer;
    GetPawn: () => CBasePlayerPawn;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayerPawnComponent(ptr_or_class: string|AnySDKClass): CPlayerPawnComponent;