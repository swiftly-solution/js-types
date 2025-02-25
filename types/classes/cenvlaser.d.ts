interface CEnvLaser {
    "LaserTarget": string;
    readonly "Sprite": CSprite;
    "SpriteName": string;
    "FirePosition": Vector;
    "StartFrame": number;
    readonly "Parent": CBeam;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvLaser(ptr_or_class: string|AnySDKClass): CEnvLaser;