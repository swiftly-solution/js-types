interface CDynamicLight {
    "ActualFlags": number;
    "Flags": number;
    "LightStyle": number;
    "On": boolean;
    "Radius": number;
    "Exponent": number;
    "InnerAngle": number;
    "OuterAngle": number;
    "SpotRadius": number;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDynamicLight(ptr_or_class: string|AnySDKClass): CDynamicLight;