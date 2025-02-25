interface CVoxelVisibility {
    "BaseClusterCount": number;
    "PVSBytesPerCluster": number;
    "MinBounds": Vector;
    "MaxBounds": Vector;
    "GridSize": number;
    "SkyVisibilityCluster": number;
    "SunVisibilityCluster": number;
    readonly "NodeBlock": VoxelVisBlockOffset_t;
    readonly "RegionBlock": VoxelVisBlockOffset_t;
    readonly "EnclosedClusterListBlock": VoxelVisBlockOffset_t;
    readonly "EnclosedClustersBlock": VoxelVisBlockOffset_t;
    readonly "MasksBlock": VoxelVisBlockOffset_t;
    readonly "VisBlocks": VoxelVisBlockOffset_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVoxelVisibility(ptr_or_class: string|AnySDKClass): CVoxelVisibility;