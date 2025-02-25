interface CSeqPoseSetting {
    "Value": number;
    "X": boolean;
    "Y": boolean;
    "Z": boolean;
    "Type": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSeqPoseSetting(ptr_or_class: string|AnySDKClass): CSeqPoseSetting;