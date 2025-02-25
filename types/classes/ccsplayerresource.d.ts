interface CCSPlayerResource {
    "HostageAlive": Object;
    "IsHostageFollowingSomeone": Object;
    "HostageEntityIDs": Object;
    "BombsiteCenterA": Vector;
    "BombsiteCenterB": Vector;
    "HostageRescueX": Object;
    "HostageRescueY": Object;
    "HostageRescueZ": Object;
    "EndMatchNextMapAllVoted": boolean;
    "FoundGoalPositions": boolean;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayerResource(ptr_or_class: string|AnySDKClass): CCSPlayerResource;