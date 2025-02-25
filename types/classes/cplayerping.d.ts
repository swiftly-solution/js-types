interface CPlayerPing {
    readonly "Player": CCSPlayerPawn;
    readonly "PingedEntity": CBaseEntity;
    "Type": number;
    "Urgent": boolean;
    "PlaceName": string;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayerPing(ptr_or_class: string|AnySDKClass): CPlayerPing;