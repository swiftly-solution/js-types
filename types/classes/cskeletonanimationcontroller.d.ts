interface CSkeletonAnimationController {
    readonly "SkeletonInstance": CSkeletonInstance;
    readonly "Parent": ISkeletonAnimationController;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSkeletonAnimationController(ptr_or_class: string|AnySDKClass): CSkeletonAnimationController;