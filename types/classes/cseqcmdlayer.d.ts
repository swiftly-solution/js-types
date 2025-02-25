interface CSeqCmdLayer {
    "Cmd": number;
    "LocalReference": number;
    "LocalBonemask": number;
    "DstResult": number;
    "SrcResult": number;
    "Spline": boolean;
    "Var1": number;
    "Var2": number;
    "LineNumber": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSeqCmdLayer(ptr_or_class: string|AnySDKClass): CSeqCmdLayer;