interface FeCollisionPlane_t {
    "CtrlParent": number;
    "ChildNode": number;
    readonly "Plane": RnPlane_t;
    "Strength": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeCollisionPlane_t(ptr_or_class: string|AnySDKClass): FeCollisionPlane_t;