interface CPlayer_WaterServices {
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayer_WaterServices(ptr_or_class: string|AnySDKClass): CPlayer_WaterServices;