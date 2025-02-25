interface CPointClientUIWorldPanel {
    "IgnoreInput": boolean;
    "Lit": boolean;
    "FollowPlayerAcrossTeleport": boolean;
    "Width": number;
    "Height": number;
    "DPI": number;
    "InteractDistance": number;
    "DepthOffset": number;
    "OwnerContext": number;
    "HorizontalAlign": number;
    "VerticalAlign": number;
    "Orientation": number;
    "AllowInteractionFromAllSceneWorlds": boolean;
    readonly "CSSClasses": Object;
    "Opaque": boolean;
    "NoDepth": boolean;
    "RenderBackface": boolean;
    "UseOffScreenIndicator": boolean;
    "ExcludeFromSaveGames": boolean;
    "Grabbable": boolean;
    "OnlyRenderToTexture": boolean;
    "DisableMipGen": boolean;
    "ExplicitImageLayout": number;
    readonly "Parent": CBaseClientUIEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointClientUIWorldPanel(ptr_or_class: string|AnySDKClass): CPointClientUIWorldPanel;