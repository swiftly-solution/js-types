interface CSeqAutoLayer {
    "LocalReference": number;
    "LocalPose": number;
    readonly "Flags": CSeqAutoLayerFlag;
    "Start": number;
    "Peak": number;
    "Tail": number;
    "End": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSeqAutoLayer(ptr_or_class: string|AnySDKClass): CSeqAutoLayer;