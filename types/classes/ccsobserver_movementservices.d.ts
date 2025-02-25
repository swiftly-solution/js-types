interface CCSObserver_MovementServices {
    readonly "Parent": CPlayer_MovementServices;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSObserver_MovementServices(ptr_or_class: string|AnySDKClass): CCSObserver_MovementServices;