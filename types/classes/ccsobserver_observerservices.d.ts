interface CCSObserver_ObserverServices {
    readonly "Parent": CPlayer_ObserverServices;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSObserver_ObserverServices(ptr_or_class: string|AnySDKClass): CCSObserver_ObserverServices;