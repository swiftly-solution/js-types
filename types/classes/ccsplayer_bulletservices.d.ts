interface CCSPlayer_BulletServices {
    "TotalHitsOnServer": number;
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayer_BulletServices(ptr_or_class: string|AnySDKClass): CCSPlayer_BulletServices;