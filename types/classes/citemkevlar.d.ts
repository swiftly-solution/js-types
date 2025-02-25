interface CItemKevlar {
    readonly "Parent": CItem;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CItemKevlar(ptr_or_class: string|AnySDKClass): CItemKevlar;