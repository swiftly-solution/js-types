interface CTonemapTrigger {
    "TonemapControllerName": string;
    readonly "TonemapController": CEntityInstance;
    readonly "Parent": CBaseTrigger;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTonemapTrigger(ptr_or_class: string|AnySDKClass): CTonemapTrigger;