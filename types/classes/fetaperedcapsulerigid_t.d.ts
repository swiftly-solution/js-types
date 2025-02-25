interface FeTaperedCapsuleRigid_t {
    "Sphere": Object;
    "Node": number;
    "CollisionMask": number;
    "VertexMapIndex": number;
    "Flags": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeTaperedCapsuleRigid_t(ptr_or_class: string|AnySDKClass): FeTaperedCapsuleRigid_t;