interface CModelState {
    "ModelName": string;
    "ClientClothCreationSuppressed": boolean;
    "MeshGroupMask": number;
    "IdealMotionType": number;
    "ForceLOD": number;
    "ClothUpdateFlags": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CModelState(ptr_or_class: string|AnySDKClass): CModelState;