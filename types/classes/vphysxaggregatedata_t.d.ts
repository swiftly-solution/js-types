interface VPhysXAggregateData_t {
    "Flags": number;
    "RefCounter": number;
    readonly "BonesHash": Object;
    readonly "BoneNames": Object;
    readonly "IndexNames": Object;
    readonly "IndexHash": Object;
    readonly "Parts": Object;
    readonly "Constraints2": Object;
    readonly "Joints": Object;
    readonly "FeModel": PhysFeModelDesc_t;
    readonly "BoneParents": Object;
    readonly "SurfacePropertyHashes": Object;
    readonly "CollisionAttributes": Object;
    readonly "DebugPartNames": Object;
    "EmbeddedKeyvalues": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VPhysXAggregateData_t(ptr_or_class: string|AnySDKClass): VPhysXAggregateData_t;