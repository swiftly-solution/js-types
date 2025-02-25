interface CRectLight {
    "ShowLight": boolean;
    readonly "Parent": CBarnLight;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRectLight(ptr_or_class: string|AnySDKClass): CRectLight;