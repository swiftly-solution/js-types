interface CSoundOpvarSetPathCornerEntity {
    "DistMinSqr": number;
    "DistMaxSqr": number;
    "PathCornerEntityName": string;
    readonly "Parent": CSoundOpvarSetPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundOpvarSetPathCornerEntity(ptr_or_class: string|AnySDKClass): CSoundOpvarSetPathCornerEntity;