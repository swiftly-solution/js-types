interface CPlayer_AutoaimServices {
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayer_AutoaimServices(ptr_or_class: string|AnySDKClass): CPlayer_AutoaimServices;