interface CBodyComponentBaseAnimGraph {
    readonly "AnimationController": CBaseAnimGraphController;
    readonly "Parent": CBodyComponentSkeletonInstance;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBodyComponentBaseAnimGraph(ptr_or_class: string|AnySDKClass): CBodyComponentBaseAnimGraph;