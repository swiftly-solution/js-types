interface CPlayer_FlashlightServices {
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayer_FlashlightServices(ptr_or_class: string|AnySDKClass): CPlayer_FlashlightServices;