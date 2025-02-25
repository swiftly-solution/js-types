interface CCSObserverPawn {
    readonly "Parent": CCSPlayerPawnBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSObserverPawn(ptr_or_class: string|AnySDKClass): CCSObserverPawn;