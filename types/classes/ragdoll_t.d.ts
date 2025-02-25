interface ragdoll_t {
    readonly "List": Object;
    readonly "BoneIndex": Object;
    "AllowStretch": boolean;
    "Unused": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ragdoll_t(ptr_or_class: string|AnySDKClass): ragdoll_t;