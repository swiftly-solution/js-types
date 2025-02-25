interface PhysFeModelDesc_t {
    readonly "CtrlHash": Object;
    readonly "CtrlName": Object;
    "StaticNodeFlags": number;
    "DynamicNodeFlags": number;
    "LocalForce": number;
    "LocalRotation": number;
    "NodeCount": number;
    "StaticNodes": number;
    "RotLockStaticNodes": number;
    "FirstPositionDrivenNode": number;
    "SimdTriCount1": number;
    "SimdTriCount2": number;
    "SimdQuadCount1": number;
    "SimdQuadCount2": number;
    "QuadCount1": number;
    "QuadCount2": number;
    "TreeDepth": number;
    "NodeBaseJiggleboneDependsCount": number;
    "RopeCount": number;
    readonly "Ropes": Object;
    readonly "NodeBases": Object;
    readonly "SimdNodeBases": Object;
    readonly "Quads": Object;
    readonly "SimdQuads": Object;
    readonly "SimdTris": Object;
    readonly "SimdRods": Object;
    readonly "SimdRodsAnim": Object;
    readonly "Rods": Object;
    readonly "Twists": Object;
    readonly "HingeLimits": Object;
    readonly "AntiTunnelProbes": Object;
    readonly "AntiTunnelTargetNodes": Object;
    readonly "AxialEdges": Object;
    readonly "NodeInvMasses": Object;
    readonly "CtrlOffsets": Object;
    readonly "CtrlOsOffsets": Object;
    readonly "FollowNodes": Object;
    readonly "CollisionPlanes": Object;
    readonly "NodeIntegrator": Object;
    readonly "SpringIntegrator": Object;
    readonly "SimdSpringIntegrator": Object;
    readonly "WorldCollisionParams": Object;
    readonly "LegacyStretchForce": Object;
    readonly "NodeCollisionRadii": Object;
    readonly "DynNodeFriction": Object;
    readonly "LocalRotation1": Object;
    readonly "LocalForce1": Object;
    readonly "TaperedCapsuleStretches": Object;
    readonly "TaperedCapsuleRigids": Object;
    readonly "SphereRigids": Object;
    readonly "WorldCollisionNodes": Object;
    readonly "TreeParents": Object;
    readonly "TreeCollisionMasks": Object;
    readonly "TreeChildren": Object;
    readonly "FreeNodes": Object;
    readonly "FitMatrices": Object;
    readonly "FitWeights": Object;
    readonly "ReverseOffsets": Object;
    readonly "AnimStrayRadii": Object;
    readonly "SimdAnimStrayRadii": Object;
    readonly "KelagerBends": Object;
    readonly "CtrlSoftOffsets": Object;
    readonly "JiggleBones": Object;
    readonly "SourceElems": Object;
    readonly "GoalDampedSpringIntegrators": Object;
    readonly "Tris": Object;
    "TriCount1": number;
    "TriCount2": number;
    "ReservedUint8": number;
    "ExtraPressureIterations": number;
    "ExtraGoalIterations": number;
    "ExtraIterations": number;
    readonly "SDFRigids": Object;
    readonly "BoxRigids": Object;
    readonly "DynNodeVertexSet": Object;
    readonly "VertexSetNames": Object;
    readonly "RigidColliderPriorities": Object;
    readonly "MorphLayers": Object;
    readonly "MorphSetData": Object;
    readonly "VertexMaps": Object;
    readonly "VertexMapValues": Object;
    readonly "Effects": Object;
    readonly "LockToParent": Object;
    readonly "LockToGoal": Object;
    readonly "SkelParents": Object;
    readonly "DynNodeWindBases": Object;
    "InternalPressure": number;
    "DefaultTimeDilation": number;
    "Windage": number;
    "WindDrag": number;
    "DefaultSurfaceStretch": number;
    "DefaultThreadStretch": number;
    "DefaultGravityScale": number;
    "DefaultVelAirDrag": number;
    "DefaultExpAirDrag": number;
    "DefaultVelQuadAirDrag": number;
    "DefaultExpQuadAirDrag": number;
    "RodVelocitySmoothRate": number;
    "QuadVelocitySmoothRate": number;
    "AddWorldCollisionRadius": number;
    "DefaultVolumetricSolveAmount": number;
    "MotionSmoothCDT": number;
    "LocalDrag1": number;
    "RodVelocitySmoothIterations": number;
    "QuadVelocitySmoothIterations": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PhysFeModelDesc_t(ptr_or_class: string|AnySDKClass): PhysFeModelDesc_t;