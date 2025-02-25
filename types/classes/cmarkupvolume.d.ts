interface CMarkupVolume {
    "Disabled": boolean;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMarkupVolume(ptr_or_class: string|AnySDKClass): CMarkupVolume;