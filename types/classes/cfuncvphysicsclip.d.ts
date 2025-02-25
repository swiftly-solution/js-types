interface CFuncVPhysicsClip {
    "Disabled": boolean;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncVPhysicsClip(ptr_or_class: string|AnySDKClass): CFuncVPhysicsClip;