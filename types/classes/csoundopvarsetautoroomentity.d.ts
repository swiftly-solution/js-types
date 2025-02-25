interface CSoundOpvarSetAutoRoomEntity {
    readonly "TraceResults": Object;
    readonly "DoorwayPairs": Object;
    "Size": number;
    "HeightTolerance": number;
    "SizeSqr": number;
    readonly "Parent": CSoundOpvarSetPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundOpvarSetAutoRoomEntity(ptr_or_class: string|AnySDKClass): CSoundOpvarSetAutoRoomEntity;