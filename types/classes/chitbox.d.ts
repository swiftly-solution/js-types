interface CHitBox {
    "Name": string;
    "SurfaceProperty": string;
    "BoneName": string;
    "MinBounds": Vector;
    "MaxBounds": Vector;
    "ShapeRadius": number;
    "BoneNameHash": number;
    "GroupId": number;
    "ShapeType": number;
    "TranslationOnly": boolean;
    "CRC": number;
    "CRenderColor": Color;
    "HitBoxIndex": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHitBox(ptr_or_class: string|AnySDKClass): CHitBox;