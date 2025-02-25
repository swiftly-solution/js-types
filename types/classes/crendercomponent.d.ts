interface CRenderComponent {
    readonly "__pChainEntity": CNetworkVarChainer;
    "IsRenderingWithViewModels": boolean;
    "SplitscreenFlags": number;
    "EnableRendering": boolean;
    "InterpolationReadyToDraw": boolean;
    readonly "Parent": CEntityComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRenderComponent(ptr_or_class: string|AnySDKClass): CRenderComponent;