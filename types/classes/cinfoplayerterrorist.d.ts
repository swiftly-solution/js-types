interface CInfoPlayerTerrorist {
    readonly "Parent": SpawnPoint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoPlayerTerrorist(ptr_or_class: string|AnySDKClass): CInfoPlayerTerrorist;