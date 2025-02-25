interface CPhysicsPropOverride {
    readonly "Parent": CPhysicsProp;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysicsPropOverride(ptr_or_class: string|AnySDKClass): CPhysicsPropOverride;