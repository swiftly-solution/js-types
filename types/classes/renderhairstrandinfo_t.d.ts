interface RenderHairStrandInfo_t {
    "GuideHairIndices_nSurfaceTriIndex": Object;
    "GuideBary_vBaseBary": Object;
    "RootOffset_flLengthScale": Object;
    "PackedBaseUv": Object;
    "PackedSurfaceNormalOs": number;
    "PackedSurfaceTangentOs": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RenderHairStrandInfo_t(ptr_or_class: string|AnySDKClass): RenderHairStrandInfo_t;