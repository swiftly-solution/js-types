interface CInfoOffscreenPanoramaTexture {
    "Disabled": boolean;
    "ResolutionX": number;
    "ResolutionY": number;
    "LayoutFileName": string;
    "RenderAttrName": string;
    "TargetChangeCount": number;
    readonly "CSSClasses": Object;
    "TargetsName": string;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoOffscreenPanoramaTexture(ptr_or_class: string|AnySDKClass): CInfoOffscreenPanoramaTexture;