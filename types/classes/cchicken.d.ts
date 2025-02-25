interface CChicken {
    readonly "AttributeManager": CAttributeContainer;
    readonly "UpdateTimer": CountdownTimer;
    "StuckAnchor": Vector;
    readonly "StuckTimer": CountdownTimer;
    readonly "CollisionStuckTimer": CountdownTimer;
    "IsOnGround": boolean;
    "FallVelocity": Vector;
    "DesiredActivity": number;
    "CurrentActivity": number;
    readonly "ActivityTimer": CountdownTimer;
    "TurnRate": number;
    readonly "FleeFrom": CBaseEntity;
    readonly "MoveRateThrottleTimer": CountdownTimer;
    readonly "StartleTimer": CountdownTimer;
    readonly "VocalizeTimer": CountdownTimer;
    "WhenZombified": number;
    "JumpedThisFrame": boolean;
    readonly "Leader": CCSPlayerPawn;
    readonly "ReuseTimer": CountdownTimer;
    "HasBeenUsed": boolean;
    readonly "JumpTimer": CountdownTimer;
    "LastJumpTime": number;
    "InJump": boolean;
    readonly "RepathTimer": CountdownTimer;
    "PathGoal": Vector;
    "ActiveFollowStartTime": number;
    readonly "FollowMinuteTimer": CountdownTimer;
    readonly "BlockDirectionTimer": CountdownTimer;
    readonly "Parent": CDynamicProp;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CChicken(ptr_or_class: string|AnySDKClass): CChicken;