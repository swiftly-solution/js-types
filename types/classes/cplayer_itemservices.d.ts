interface CPlayer_ItemServices {
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayer_ItemServices(ptr_or_class: string|AnySDKClass): CPlayer_ItemServices;