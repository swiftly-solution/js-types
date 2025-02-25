interface CPlayer_ViewModelServices {
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayer_ViewModelServices(ptr_or_class: string|AnySDKClass): CPlayer_ViewModelServices;