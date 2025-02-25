interface CCSObserver_ViewModelServices {
    readonly "Parent": CPlayer_ViewModelServices;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSObserver_ViewModelServices(ptr_or_class: string|AnySDKClass): CCSObserver_ViewModelServices;