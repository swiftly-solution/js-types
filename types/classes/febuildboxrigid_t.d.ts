interface FeBuildBoxRigid_t {
    "Priority": number;
    "VertexMapHash": number;
    readonly "Parent": FeBoxRigid_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeBuildBoxRigid_t(ptr_or_class: string|AnySDKClass): FeBuildBoxRigid_t;