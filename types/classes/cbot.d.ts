interface CBot {
    readonly "Controller": CCSPlayerController;
    readonly "Player": CCSPlayerPawn;
    "HasSpawned": boolean;
    "Id": number;
    "IsRunning": boolean;
    "IsCrouching": boolean;
    "ForwardSpeed": number;
    "LeftSpeed": number;
    "VerticalSpeed": number;
    "ButtonFlags": number;
    "JumpTimestamp": number;
    "ViewForward": Vector;
    "PostureStackIndex": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBot(ptr_or_class: string|AnySDKClass): CBot;