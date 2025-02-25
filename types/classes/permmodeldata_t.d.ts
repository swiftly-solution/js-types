interface PermModelData_t {
    "Name": string;
    readonly "ModelInfo": PermModelInfo_t;
    readonly "ExtParts": Object;
    readonly "RefMeshGroupMasks": Object;
    readonly "RefPhysGroupMasks": Object;
    readonly "RefLODGroupMasks": Object;
    readonly "LodGroupSwitchDistances": Object;
    readonly "MeshGroups": Object;
    readonly "MaterialGroups": Object;
    "DefaultMeshGroupMask": number;
    readonly "ModelSkeleton": ModelSkeletonData_t;
    readonly "RemappingTable": Object;
    readonly "RemappingTableStarts": Object;
    readonly "BoneFlexDrivers": Object;
    readonly "ModelConfigList": CModelConfigList;
    readonly "BodyGroupsHiddenInTools": Object;
    readonly "AnimatedMaterialAttributes": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PermModelData_t(ptr_or_class: string|AnySDKClass): PermModelData_t;