interface CEffectData {
    "Origin": Vector;
    "Start": Vector;
    "Normal": Vector;
    "Angles": QAngle;
    readonly "Entity": CEntityInstance;
    readonly "OtherEntity": CEntityInstance;
    "Scale": number;
    "Magnitude": number;
    "Radius": number;
    "SurfaceProp": number;
    "DamageType": number;
    "Penetrate": number;
    "Material": number;
    "HitBox": number;
    "Color": number;
    "Flags": number;
    "AttachmentName": number;
    "EffectName": number;
    "ExplosionType": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEffectData(ptr_or_class: string|AnySDKClass): CEffectData;