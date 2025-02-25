interface CItemDefuserAlias_item_defuser {
    readonly "Parent": CItemDefuser;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CItemDefuserAlias_item_defuser(ptr_or_class: string|AnySDKClass): CItemDefuserAlias_item_defuser;