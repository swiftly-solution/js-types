interface CDSPPresetMixgroupModifierTable {
    readonly "Table": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CDSPPresetMixgroupModifierTable(ptr_or_class: string|AnySDKClass): CDSPPresetMixgroupModifierTable;