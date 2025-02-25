interface CNetworkOriginCellCoordQuantizedVector {
    "CellX": number;
    "CellY": number;
    "CellZ": number;
    "OutsideWorld": number;
    "X": number;
    "Y": number;
    "Z": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNetworkOriginCellCoordQuantizedVector(ptr_or_class: string|AnySDKClass): CNetworkOriginCellCoordQuantizedVector;