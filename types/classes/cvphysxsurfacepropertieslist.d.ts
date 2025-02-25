interface CVPhysXSurfacePropertiesList {
    readonly "SurfacePropertiesList": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CVPhysXSurfacePropertiesList(ptr_or_class: string|AnySDKClass): CVPhysXSurfacePropertiesList;