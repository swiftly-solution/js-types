interface CBodyComponentBaseModelEntity {
    readonly "Parent": CBodyComponentSkeletonInstance;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBodyComponentBaseModelEntity(ptr_or_class: string|AnySDKClass): CBodyComponentBaseModelEntity;