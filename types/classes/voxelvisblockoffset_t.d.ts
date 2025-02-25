interface VoxelVisBlockOffset_t {
    "Offset": number;
    "ElementCount": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VoxelVisBlockOffset_t(ptr_or_class: string|AnySDKClass): VoxelVisBlockOffset_t;