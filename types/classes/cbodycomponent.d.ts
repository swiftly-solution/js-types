interface CBodyComponent {
    readonly "SceneNode": CGameSceneNode;
    readonly "__pChainEntity": CNetworkVarChainer;
    readonly "Parent": CEntityComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBodyComponent(ptr_or_class: string|AnySDKClass): CBodyComponent;