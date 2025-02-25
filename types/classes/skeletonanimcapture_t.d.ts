interface SkeletonAnimCapture_t {
    "EntIndex": number;
    "EntParent": number;
    readonly "ImportedCollision": Object;
    "ModelName": string;
    "CaptureName": string;
    "FlexControllers": number;
    "Predicted": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SkeletonAnimCapture_t(ptr_or_class: string|AnySDKClass): SkeletonAnimCapture_t;