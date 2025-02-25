interface CSoundOpvarSetOBBEntity {
    readonly "Parent": CSoundOpvarSetAABBEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundOpvarSetOBBEntity(ptr_or_class: string|AnySDKClass): CSoundOpvarSetOBBEntity;