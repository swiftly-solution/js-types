interface ConfigIndex {
    "Group": number;
    "Config": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ConfigIndex(ptr_or_class: string|AnySDKClass): ConfigIndex;