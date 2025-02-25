interface CFuncMonitor {
    "TargetCamera": string;
    "ResolutionEnum": number;
    "RenderShadows": boolean;
    "UseUniqueColorTarget": boolean;
    "BrushModelName": string;
    readonly "TargetCamera1": CBaseEntity;
    "Enabled": boolean;
    "Draw3DSkybox": boolean;
    "StartEnabled": boolean;
    readonly "Parent": CFuncBrush;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncMonitor(ptr_or_class: string|AnySDKClass): CFuncMonitor;