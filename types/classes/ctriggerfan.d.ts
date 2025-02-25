interface CTriggerFan {
    "FanOrigin": Vector;
    "FanEnd": Vector;
    "Noise": Vector;
    "Force": number;
    "RopeForceScale": number;
    "PlayerForce": number;
    "RampTime": number;
    "Falloff": boolean;
    "PushPlayer": boolean;
    "RampDown": boolean;
    "AddNoise": boolean;
    readonly "RampTimer": CountdownTimer;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTriggerFan(ptr_or_class: string|AnySDKClass): CTriggerFan;