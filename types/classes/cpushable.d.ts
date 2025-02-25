interface CPushable {
    readonly "Parent": CBreakable;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPushable(ptr_or_class: string|AnySDKClass): CPushable;