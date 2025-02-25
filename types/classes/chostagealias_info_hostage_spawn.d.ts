interface CHostageAlias_info_hostage_spawn {
    readonly "Parent": CHostage;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHostageAlias_info_hostage_spawn(ptr_or_class: string|AnySDKClass): CHostageAlias_info_hostage_spawn;