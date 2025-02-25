interface CPlayer_MovementServices_Humanoid {
    "StepSoundTime": number;
    "FallVelocity": number;
    "InCrouch": boolean;
    "CrouchState": number;
    "CrouchTransitionStartTime": number;
    "Ducked": boolean;
    "Ducking": boolean;
    "InDuckJump": boolean;
    "GroundNormal": Vector;
    "SurfaceFriction": number;
    "SurfaceProps": number;
    "Stepside": number;
    "TargetVolume": number;
    "SmoothedVelocity": Vector;
    readonly "Parent": CPlayer_MovementServices;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPlayer_MovementServices_Humanoid(ptr_or_class: string|AnySDKClass): CPlayer_MovementServices_Humanoid;