interface CStateNodeStateData {
    readonly "Child": CAnimUpdateNodeRef;
    "ExclusiveRootMotion": any;
    "ExclusiveRootMotionFirstFrame": any;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CStateNodeStateData(ptr_or_class: string|AnySDKClass): CStateNodeStateData;