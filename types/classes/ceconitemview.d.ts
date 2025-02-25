interface CEconItemView {
    "ItemDefinitionIndex": number;
    "EntityQuality": number;
    "EntityLevel": number;
    "ItemID": number;
    "ItemIDHigh": number;
    "ItemIDLow": number;
    "AccountID": number;
    "InventoryPosition": number;
    "Initialized": boolean;
    readonly "AttributeList": CAttributeList;
    readonly "NetworkedDynamicAttributes": CAttributeList;
    "CustomName": string;
    "CustomNameOverride": string;
    readonly "Parent": IEconItemInterface;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEconItemView(ptr_or_class: string|AnySDKClass): CEconItemView;