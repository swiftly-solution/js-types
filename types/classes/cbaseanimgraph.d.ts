interface CBaseAnimGraph {
    "InitiallyPopulateInterpHistory": boolean;
    readonly "ChoreoServices": IChoreoServices;
    "AnimGraphUpdateEnabled": boolean;
    "MaxSlopeDistance": number;
    "LastSlopeCheckPos": Vector;
    "AnimationUpdateScheduled": boolean;
    "Force": Vector;
    "ForceBone": number;
    readonly "RagdollPose": PhysicsRagdollPose_t;
    "RagdollClientSide": boolean;
    "LastDestructiblePartDestroyedAnimgraphSetTick": number;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseAnimGraph(ptr_or_class: string|AnySDKClass): CBaseAnimGraph;