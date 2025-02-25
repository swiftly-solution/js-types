interface CPhysicsPropMultiplayer {
    readonly "Parent": CPhysicsProp;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysicsPropMultiplayer(ptr_or_class: string|AnySDKClass): CPhysicsPropMultiplayer;