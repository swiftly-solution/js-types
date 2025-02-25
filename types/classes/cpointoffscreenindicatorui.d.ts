interface CPointOffScreenIndicatorUi {
    "BeenEnabled": boolean;
    "Hide": boolean;
    "SeenTargetTime": number;
    readonly "TargetPanel": any;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPointOffScreenIndicatorUi(ptr_or_class: string|AnySDKClass): CPointOffScreenIndicatorUi;