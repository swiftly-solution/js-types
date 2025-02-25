interface CInfoVisibilityBox {
    "Mode": number;
    "BoxSize": Vector;
    "Enabled": boolean;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoVisibilityBox(ptr_or_class: string|AnySDKClass): CInfoVisibilityBox;