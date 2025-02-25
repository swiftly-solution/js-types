interface CPhysicalButton {
    readonly "Parent": CBaseButton;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPhysicalButton(ptr_or_class: string|AnySDKClass): CPhysicalButton;