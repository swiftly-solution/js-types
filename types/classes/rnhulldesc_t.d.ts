interface RnHullDesc_t {
    readonly "Hull": any;
    readonly "Parent": RnShapeDesc_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnHullDesc_t(ptr_or_class: string|AnySDKClass): RnHullDesc_t;