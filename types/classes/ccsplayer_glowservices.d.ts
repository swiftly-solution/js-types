interface CCSPlayer_GlowServices {
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayer_GlowServices(ptr_or_class: string|AnySDKClass): CCSPlayer_GlowServices;