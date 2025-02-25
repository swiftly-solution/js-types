interface CPlayer_UseServices {
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayer_UseServices(ptr_or_class: string|AnySDKClass): CPlayer_UseServices;