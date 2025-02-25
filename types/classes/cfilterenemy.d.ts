interface CFilterEnemy {
    "EnemyName": string;
    "Radius": number;
    "OuterRadius": number;
    "MaxSquadmatesPerEnemy": number;
    "PlayerName": string;
    readonly "Parent": CBaseFilter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFilterEnemy(ptr_or_class: string|AnySDKClass): CFilterEnemy;