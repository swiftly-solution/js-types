interface CSkyboxReference {
    "WorldGroupId": number;
    readonly "SkyCamera": CSkyCamera;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSkyboxReference(ptr_or_class: string|AnySDKClass): CSkyboxReference;