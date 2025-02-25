interface OldFeEdge_t {
    "K": Object;
    "InvA": number;
    "T": number;
    "ThetaRelaxed": number;
    "ThetaFactor": number;
    "C01": number;
    "C02": number;
    "C03": number;
    "C04": number;
    "AxialModelDist": number;
    "AxialModelWeights": Object;
    "Node": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function OldFeEdge_t(ptr_or_class: string|AnySDKClass): OldFeEdge_t;