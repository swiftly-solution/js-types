interface CPointPrefab {
    "TargetMapName": string;
    "ForceWorldGroupID": string;
    "AssociatedRelayTargetName": string;
    "FixupNames": boolean;
    "LoadDynamic": boolean;
    readonly "AssociatedRelayEntity": CPointPrefab;
    readonly "Parent": CServerOnlyPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointPrefab(ptr_or_class: string|AnySDKClass): CPointPrefab;