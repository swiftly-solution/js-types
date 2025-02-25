interface FeBuildSphereRigid_t {
    "Priority": number;
    "VertexMapHash": number;
    readonly "Parent": FeSphereRigid_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeBuildSphereRigid_t(ptr_or_class: string|AnySDKClass): FeBuildSphereRigid_t;