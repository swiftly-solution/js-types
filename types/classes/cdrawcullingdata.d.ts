interface CDrawCullingData {
    "ConeApex": Vector;
    "ConeAxis": Object;
    "ConeCutoff": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDrawCullingData(ptr_or_class: string|AnySDKClass): CDrawCullingData;