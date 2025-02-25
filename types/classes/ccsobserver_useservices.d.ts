interface CCSObserver_UseServices {
    readonly "Parent": CPlayer_UseServices;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSObserver_UseServices(ptr_or_class: string|AnySDKClass): CCSObserver_UseServices;