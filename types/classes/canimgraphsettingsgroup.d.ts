interface CAnimGraphSettingsGroup {

    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimGraphSettingsGroup(ptr_or_class: string|AnySDKClass): CAnimGraphSettingsGroup;