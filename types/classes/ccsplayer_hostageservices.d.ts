interface CCSPlayer_HostageServices {
    readonly "CarriedHostage": CBaseEntity;
    readonly "CarriedHostageProp": CBaseEntity;
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayer_HostageServices(ptr_or_class: string|AnySDKClass): CCSPlayer_HostageServices;