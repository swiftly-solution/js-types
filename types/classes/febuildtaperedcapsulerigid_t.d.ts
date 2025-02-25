interface FeBuildTaperedCapsuleRigid_t {
    "Priority": number;
    "VertexMapHash": number;
    readonly "Parent": FeTaperedCapsuleRigid_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeBuildTaperedCapsuleRigid_t(ptr_or_class: string|AnySDKClass): FeBuildTaperedCapsuleRigid_t;