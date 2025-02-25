interface CItemSoda {
    readonly "Parent": CBaseAnimGraph;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CItemSoda(ptr_or_class: string|AnySDKClass): CItemSoda;