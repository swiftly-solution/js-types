interface FeSDFRigid_t {
    "LocalMin": Vector;
    "LocalMax": Vector;
    "Bounciness": number;
    "Node": number;
    "CollisionMask": number;
    "VertexMapIndex": number;
    "Flags": number;
    readonly "Distances": Object;
    "Width": number;
    "Height": number;
    "Depth": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeSDFRigid_t(ptr_or_class: string|AnySDKClass): FeSDFRigid_t;