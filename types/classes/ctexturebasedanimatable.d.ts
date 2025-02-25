interface CTextureBasedAnimatable {
    "Loop": boolean;
    "FPS": number;
    "AnimationBoundsMin": Vector;
    "AnimationBoundsMax": Vector;
    "StartTime": number;
    "StartFrame": number;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTextureBasedAnimatable(ptr_or_class: string|AnySDKClass): CTextureBasedAnimatable;