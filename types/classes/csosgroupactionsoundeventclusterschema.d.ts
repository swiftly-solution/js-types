interface CSosGroupActionSoundeventClusterSchema {
    "MinNearby": number;
    "ClusterEpsilon": number;
    "ShouldPlayOpvar": string;
    "ShouldPlayClusterChild": string;
    "ClusterSizeOpvar": string;
    "GroupBoundingBoxMinsOpvar": string;
    "GroupBoundingBoxMaxsOpvar": string;
    readonly "Parent": CSosGroupActionSchema;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSosGroupActionSoundeventClusterSchema(ptr_or_class: string|AnySDKClass): CSosGroupActionSoundeventClusterSchema;