interface CCSPlayer_ViewModelServices {
    readonly "ViewModel": Object;
    readonly "Parent": CPlayer_ViewModelServices;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayer_ViewModelServices(ptr_or_class: string|AnySDKClass): CCSPlayer_ViewModelServices;