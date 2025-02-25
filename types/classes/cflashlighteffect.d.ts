interface CFlashlightEffect {
    "IsOn": boolean;
    "MuzzleFlashEnabled": boolean;
    "MuzzleFlashBrightness": number;
    "MuzzleFlashOrigin": Vector;
    "Fov": number;
    "FarZ": number;
    "LinearAtten": number;
    "CastsShadows": boolean;
    "CurrentPullBackDist": number;
    "TextureName": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFlashlightEffect(ptr_or_class: string|AnySDKClass): CFlashlightEffect;