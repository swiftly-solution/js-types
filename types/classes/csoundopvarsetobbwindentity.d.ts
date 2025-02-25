interface CSoundOpvarSetOBBWindEntity {
    "Mins": Vector;
    "Maxs": Vector;
    "DistanceMins": Vector;
    "DistanceMaxs": Vector;
    "WindMin": number;
    "WindMax": number;
    "WindMapMin": number;
    "WindMapMax": number;
    readonly "Parent": CSoundOpvarSetPointBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundOpvarSetOBBWindEntity(ptr_or_class: string|AnySDKClass): CSoundOpvarSetOBBWindEntity;