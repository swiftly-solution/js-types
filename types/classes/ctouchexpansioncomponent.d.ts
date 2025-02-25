interface CTouchExpansionComponent {
    readonly "Parent": CEntityComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTouchExpansionComponent(ptr_or_class: string|AnySDKClass): CTouchExpansionComponent;