interface FeBuildSDFRigid_t {
    "Priority": number;
    "VertexMapHash": number;
    readonly "Parent": FeSDFRigid_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeBuildSDFRigid_t(ptr_or_class: string|AnySDKClass): FeBuildSDFRigid_t;