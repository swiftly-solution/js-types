interface CCSPlayer_UseServices {
    readonly "LastKnownUseEntity": CBaseEntity;
    "LastUseTimeStamp": number;
    "TimeLastUsedWindow": number;
    readonly "Parent": CPlayer_UseServices;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayer_UseServices(ptr_or_class: string|AnySDKClass): CCSPlayer_UseServices;