interface CAttributeManager {
    "ReapplyProvisionParity": number;
    readonly "Outer": CBaseEntity;
    "PreventLoopback": boolean;
    "ProviderType": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAttributeManager(ptr_or_class: string|AnySDKClass): CAttributeManager;