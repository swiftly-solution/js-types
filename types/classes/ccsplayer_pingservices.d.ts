interface CCSPlayer_PingServices {
    "PlayerPingTokens": Object;
    readonly "PlayerPing": CBaseEntity;
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayer_PingServices(ptr_or_class: string|AnySDKClass): CCSPlayer_PingServices;