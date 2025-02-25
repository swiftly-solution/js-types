interface ISkeletonAnimationController {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ISkeletonAnimationController(ptr_or_class: string|AnySDKClass): ISkeletonAnimationController;