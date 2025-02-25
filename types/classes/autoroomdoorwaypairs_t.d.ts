interface AutoRoomDoorwayPairs_t {
    "P1": Vector;
    "P2": Vector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function AutoRoomDoorwayPairs_t(ptr_or_class: string|AnySDKClass): AutoRoomDoorwayPairs_t;