interface CSoundOpvarSetAABBEntity {
    "DistanceInnerMins": Vector;
    "DistanceInnerMaxs": Vector;
    "DistanceOuterMins": Vector;
    "DistanceOuterMaxs": Vector;
    "AABBDirection": number;
    "InnerMins": Vector;
    "InnerMaxs": Vector;
    "OuterMins": Vector;
    "OuterMaxs": Vector;
    readonly "Parent": CSoundOpvarSetPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundOpvarSetAABBEntity(ptr_or_class: string|AnySDKClass): CSoundOpvarSetAABBEntity;