interface JiggleBoneSettingsList_t {
    readonly "BoneSettings": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function JiggleBoneSettingsList_t(ptr_or_class: string|AnySDKClass): JiggleBoneSettingsList_t;