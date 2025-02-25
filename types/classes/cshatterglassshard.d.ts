interface CShatterGlassShard {
    "ShardHandle": number;
    readonly "PanelVertices": Object;
    "LocalPanelSpaceOrigin": Vector2D;
    readonly "PhysicsEntity": CShatterGlassShardPhysics;
    readonly "ParentPanel": CFuncShatterglass;
    "ParentShard": number;
    "ShatterStressType": number;
    "StressVelocity": Vector;
    "CreatedModel": boolean;
    "LongestEdge": number;
    "ShortestEdge": number;
    "LongestAcross": number;
    "ShortestAcross": number;
    "SumOfAllEdges": number;
    "Area": number;
    "OnFrameEdge": number;
    "SubShardGeneration": number;
    "AverageVertPosition": Vector2D;
    "AverageVertPositionIsValid": boolean;
    "PanelSpaceStressPositionA": Vector2D;
    "PanelSpaceStressPositionB": Vector2D;
    "StressPositionAIsValid": boolean;
    "StressPositionBIsValid": boolean;
    "FlaggedForRemoval": boolean;
    "PhysicsEntitySpawnedAtTime": number;
    readonly "EntityHittingMe": CBaseEntity;
    readonly "Neighbors": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CShatterGlassShard(ptr_or_class: string|AnySDKClass): CShatterGlassShard;