interface RnSphereDesc_t {
    readonly "Parent": RnShapeDesc_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnSphereDesc_t(ptr_or_class: string|AnySDKClass): RnSphereDesc_t;