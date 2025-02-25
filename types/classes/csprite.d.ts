interface CSprite {
    readonly "AttachedToEntity": CBaseEntity;
    "SpriteFramerate": number;
    "Frame": number;
    "DieTime": number;
    "Brightness": number;
    "BrightnessDuration": number;
    "SpriteScale": number;
    "ScaleDuration": number;
    "WorldSpaceScale": boolean;
    "GlowProxySize": number;
    "HDRColorScale": number;
    "LastTime": number;
    "MaxFrame": number;
    "StartScale": number;
    "DestScale": number;
    "ScaleTimeStart": number;
    "StartBrightness": number;
    "DestBrightness": number;
    "BrightnessTimeStart": number;
    "SpriteWidth": number;
    "SpriteHeight": number;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSprite(ptr_or_class: string|AnySDKClass): CSprite;