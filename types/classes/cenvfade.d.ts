interface CEnvFade {
    "FadeColor": Color;
    "Duration": number;
    "HoldDuration": number;
    readonly "OnBeginFade": CEntityIOOutput;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvFade(ptr_or_class: string|AnySDKClass): CEnvFade;