interface CNetworkTransmitComponent {
    "TransmitStateOwnedCounter": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNetworkTransmitComponent(ptr_or_class: string|AnySDKClass): CNetworkTransmitComponent;