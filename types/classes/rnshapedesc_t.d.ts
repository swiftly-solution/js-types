interface RnShapeDesc_t {
    "CollisionAttributeIndex": number;
    "SurfacePropertyIndex": number;
    "UserFriendlyName": string;
    "UserFriendlyNameSealed": boolean;
    "UserFriendlyNameLong": boolean;
    "ToolMaterialHash": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RnShapeDesc_t(ptr_or_class: string|AnySDKClass): RnShapeDesc_t;