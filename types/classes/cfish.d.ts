interface CFish {
    readonly "Pool": CFishPool;
    "Id": number;
    "X": number;
    "Y": number;
    "Z": number;
    "Angle": number;
    "AngleChange": number;
    "Forward": Vector;
    "Perp": Vector;
    "PoolOrigin": Vector;
    "WaterLevel": number;
    "Speed": number;
    "DesiredSpeed": number;
    "CalmSpeed": number;
    "PanicSpeed": number;
    "AvoidRange": number;
    readonly "TurnTimer": CountdownTimer;
    "TurnClockwise": boolean;
    readonly "GoTimer": CountdownTimer;
    readonly "MoveTimer": CountdownTimer;
    readonly "PanicTimer": CountdownTimer;
    readonly "DisperseTimer": CountdownTimer;
    readonly "ProximityTimer": CountdownTimer;
    readonly "Visible": Object;
    readonly "Parent": CBaseAnimGraph;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFish(ptr_or_class: string|AnySDKClass): CFish;