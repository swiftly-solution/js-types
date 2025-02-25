interface CShatterGlassShardPhysics {
    "Debris": boolean;
    "ParentShard": number;
    readonly "ShardDesc": shard_model_desc_t;
    readonly "Parent": CPhysicsProp;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CShatterGlassShardPhysics(ptr_or_class: string|AnySDKClass): CShatterGlassShardPhysics;