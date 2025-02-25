interface CInfoDeathmatchSpawn {
    readonly "Parent": SpawnPoint;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoDeathmatchSpawn(ptr_or_class: string|AnySDKClass): CInfoDeathmatchSpawn;