interface SosEditItemInfo_t {
    "ItemType": number;
    "ItemName": string;
    "ItemTypeName": string;
    "ItemKVString": string;
    "ItemPos": Vector2D;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SosEditItemInfo_t(ptr_or_class: string|AnySDKClass): SosEditItemInfo_t;