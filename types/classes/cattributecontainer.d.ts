interface CAttributeContainer {
    readonly "Item": CEconItemView;
    readonly "Parent": CAttributeManager;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAttributeContainer(ptr_or_class: string|AnySDKClass): CAttributeContainer;