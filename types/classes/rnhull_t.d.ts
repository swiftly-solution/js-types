interface RnHull_t {
    "Centroid": Vector;
    "MaxAngularRadius": number;
    readonly "Bounds": AABB_t;
    "OrthographicAreas": Vector;
    "Volume": number;
    "SurfaceArea": number;
    readonly "Vertices": Object;
    readonly "VertexPositions": Object;
    readonly "Edges": Object;
    readonly "Faces": Object;
    readonly "FacePlanes": Object;
    "Flags": number;
    readonly "RegionSVM": CRegionSVM;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnHull_t(ptr_or_class: string|AnySDKClass): RnHull_t;