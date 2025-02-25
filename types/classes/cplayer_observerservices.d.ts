interface CPlayer_ObserverServices {
    "ObserverMode": number;
    readonly "ObserverTarget": CBaseEntity;
    "ObserverLastMode": number;
    "ForcedObserverMode": boolean;
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayer_ObserverServices(ptr_or_class: string|AnySDKClass): CPlayer_ObserverServices;