interface VPhysics2ShapeDef_t {
    readonly "Spheres": Object;
    readonly "Capsules": Object;
    readonly "Hulls": Object;
    readonly "Meshes": Object;
    readonly "CollisionAttributeIndices": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VPhysics2ShapeDef_t(ptr_or_class: string|AnySDKClass): VPhysics2ShapeDef_t;