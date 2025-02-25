interface CRotButton {
    readonly "Parent": CBaseButton;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRotButton(ptr_or_class: string|AnySDKClass): CRotButton;