interface SpawnPoint {
    "Priority": number;
    "Enabled": boolean;
    "Type": number;
    readonly "Parent": CServerOnlyPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SpawnPoint(ptr_or_class: string|AnySDKClass): SpawnPoint;