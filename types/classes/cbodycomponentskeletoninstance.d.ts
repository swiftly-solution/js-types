interface CBodyComponentSkeletonInstance {
    readonly "SkeletonInstance": CSkeletonInstance;
    readonly "Parent": CBodyComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBodyComponentSkeletonInstance(ptr_or_class: string|AnySDKClass): CBodyComponentSkeletonInstance;