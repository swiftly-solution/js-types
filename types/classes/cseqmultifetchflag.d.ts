interface CSeqMultiFetchFlag {
    "Realtime": boolean;
    "Cylepose": boolean;
    "0D": boolean;
    "1D": boolean;
    "2D": boolean;
    "2D_TRI": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSeqMultiFetchFlag(ptr_or_class: string|AnySDKClass): CSeqMultiFetchFlag;