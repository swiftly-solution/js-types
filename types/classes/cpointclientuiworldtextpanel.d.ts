interface CPointClientUIWorldTextPanel {
    "MessageText": string;
    readonly "Parent": CPointClientUIWorldPanel;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointClientUIWorldTextPanel(ptr_or_class: string|AnySDKClass): CPointClientUIWorldTextPanel;