interface CEnvScreenOverlay {
    "OverlayNames": Object;
    "OverlayTimes": Object;
    "StartTime": number;
    "DesiredOverlay": number;
    "IsActive": boolean;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEnvScreenOverlay(ptr_or_class: string|AnySDKClass): CEnvScreenOverlay;