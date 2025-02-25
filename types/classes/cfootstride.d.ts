interface CFootStride {
    readonly "Definition": CFootCycleDefinition;
    readonly "Trajectories": CFootTrajectories;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootStride(ptr_or_class: string|AnySDKClass): CFootStride;