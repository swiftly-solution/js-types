interface CFuncInteractionLayerClip {
    "Disabled": boolean;
    "InteractsAs": string;
    "InteractsWith": string;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncInteractionLayerClip(ptr_or_class: string|AnySDKClass): CFuncInteractionLayerClip;