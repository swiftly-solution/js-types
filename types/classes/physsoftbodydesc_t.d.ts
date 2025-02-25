interface PhysSoftbodyDesc_t {
    readonly "ParticleBoneHash": Object;
    readonly "Particles": Object;
    readonly "Springs": Object;
    readonly "Capsules": Object;
    readonly "ParticleBoneName": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PhysSoftbodyDesc_t(ptr_or_class: string|AnySDKClass): PhysSoftbodyDesc_t;