interface CEnvBeam {
    "Active": number;
    "StartEntity": string;
    "EndEntity": string;
    "Life": number;
    "BoltWidth": number;
    "NoiseAmplitude": number;
    "Speed": number;
    "Restrike": number;
    "SpriteName": string;
    "FrameStart": number;
    "EndPointWorld": Vector;
    "EndPointRelative": Vector;
    "Radius": number;
    "TouchType": number;
    "FilterName": string;
    readonly "Filter": CBaseEntity;
    "Decal": string;
    readonly "OnTouchedByEntity": CEntityIOOutput;
    readonly "Parent": CBeam;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvBeam(ptr_or_class: string|AnySDKClass): CEnvBeam;