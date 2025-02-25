interface CPointClientUIDialog {
    readonly "Activator": CBaseEntity;
    "StartEnabled": boolean;
    readonly "Parent": CBaseClientUIEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointClientUIDialog(ptr_or_class: string|AnySDKClass): CPointClientUIDialog;