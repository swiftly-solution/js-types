interface CBeam {
    "FrameRate": number;
    "HDRColorScale": number;
    "FireTime": number;
    "Damage": number;
    "NumBeamEnts": number;
    "BeamType": number;
    "BeamFlags": number;
    readonly "AttachEntity": Object;
    "Width": number;
    "EndWidth": number;
    "FadeLength": number;
    "HaloScale": number;
    "Amplitude": number;
    "StartFrame": number;
    "Speed": number;
    "Frame": number;
    "ClipStyle": number;
    "TurnedOff": boolean;
    "EndPos": Vector;
    readonly "EndEntity": CBaseEntity;
    "DissolveType": number;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBeam(ptr_or_class: string|AnySDKClass): CBeam;