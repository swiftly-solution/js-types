interface SelectedEditItemInfo_t {
    readonly "EditItems": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function SelectedEditItemInfo_t(ptr_or_class: string|AnySDKClass): SelectedEditItemInfo_t;