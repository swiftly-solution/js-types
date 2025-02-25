interface CSceneObjectData {
    "MinBounds": Vector;
    "MaxBounds": Vector;
    "TintColor": Vector4D;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSceneObjectData(ptr_or_class: string|AnySDKClass): CSceneObjectData;