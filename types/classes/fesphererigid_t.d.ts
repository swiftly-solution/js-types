interface FeSphereRigid_t {
    "Sphere": number;
    "Node": number;
    "CollisionMask": number;
    "VertexMapIndex": number;
    "Flags": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeSphereRigid_t(ptr_or_class: string|AnySDKClass): FeSphereRigid_t;