interface CSun {
    "Direction": Vector;
    "Overlay": Color;
    "EffectName": string;
    "SSEffectName": string;
    "On": boolean;
    "BmaxColor": boolean;
    "Size": number;
    "Rotation": number;
    "HazeScale": number;
    "AlphaHaze": number;
    "AlphaHdr": number;
    "AlphaScale": number;
    "HDRColorScale": number;
    "FarZScale": number;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSun(ptr_or_class: string|AnySDKClass): CSun;