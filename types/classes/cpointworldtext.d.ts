interface CPointWorldText {
    "MessageText": string;
    "FontName": string;
    "BackgroundMaterialName": string;
    "Enabled": boolean;
    "Fullbright": boolean;
    "WorldUnitsPerPx": number;
    "FontSize": number;
    "DepthOffset": number;
    "DrawBackground": boolean;
    "BackgroundBorderWidth": number;
    "BackgroundBorderHeight": number;
    "BackgroundWorldToUV": number;
    "Color": Color;
    "JustifyHorizontal": number;
    "JustifyVertical": number;
    "ReorientMode": number;
    readonly "Parent": CModelPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointWorldText(ptr_or_class: string|AnySDKClass): CPointWorldText;