interface CSkeletonInstance {
    readonly "ModelState": CModelState;
    "IsAnimationEnabled": boolean;
    "UseParentRenderBounds": boolean;
    "DisableSolidCollisionsForHierarchy": boolean;
    "DirtyMotionType": any;
    "IsGeneratingLatchedParentSpaceState": any;
    "MaterialGroup": number;
    "HitboxSet": number;
    readonly "Parent": CGameSceneNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSkeletonInstance(ptr_or_class: string|AnySDKClass): CSkeletonInstance;