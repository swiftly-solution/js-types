interface CMotionSearchDB {
    readonly "RootNode": CMotionSearchNode;
    readonly "ResidualQuantizer": CProductQuantizer;
    readonly "CodeIndices": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMotionSearchDB(ptr_or_class: string|AnySDKClass): CMotionSearchDB;