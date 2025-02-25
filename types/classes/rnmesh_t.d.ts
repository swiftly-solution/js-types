interface RnMesh_t {
    "Min": Vector;
    "Max": Vector;
    readonly "Nodes": Object;
    readonly "Triangles": Object;
    readonly "Wings": Object;
    readonly "Materials": Object;
    "OrthographicAreas": Vector;
    "Flags": number;
    "DebugFlags": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnMesh_t(ptr_or_class: string|AnySDKClass): RnMesh_t;