interface CJiggleBoneUpdateNode {
    readonly "OpFixedData": JiggleBoneSettingsList_t;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CJiggleBoneUpdateNode(ptr_or_class: string|AnySDKClass): CJiggleBoneUpdateNode;