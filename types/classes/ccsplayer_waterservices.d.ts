interface CCSPlayer_WaterServices {
    "NextDrownDamageTime": number;
    "DrownDmgRate": number;
    "AirFinishedTime": number;
    "WaterJumpTime": number;
    "WaterJumpVel": Vector;
    "SwimSoundTime": number;
    readonly "Parent": CPlayer_WaterServices;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayer_WaterServices(ptr_or_class: string|AnySDKClass): CCSPlayer_WaterServices;