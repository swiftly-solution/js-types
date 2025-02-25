interface CCSPlayer_DamageReactServices {
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayer_DamageReactServices(ptr_or_class: string|AnySDKClass): CCSPlayer_DamageReactServices;