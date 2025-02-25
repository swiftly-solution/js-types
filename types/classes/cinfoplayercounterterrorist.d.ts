interface CInfoPlayerCounterterrorist {
    readonly "Parent": SpawnPoint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoPlayerCounterterrorist(ptr_or_class: string|AnySDKClass): CInfoPlayerCounterterrorist;