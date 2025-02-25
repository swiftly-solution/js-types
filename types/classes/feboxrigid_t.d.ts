interface FeBoxRigid_t {
    "Node": number;
    "CollisionMask": number;
    "Size": Vector;
    "VertexMapIndex": number;
    "Flags": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeBoxRigid_t(ptr_or_class: string|AnySDKClass): FeBoxRigid_t;