interface CModelConfigElement_SetBodygroupOnAttachedModels {
    "GroupName": string;
    "Choice": number;
    readonly "Parent": CModelConfigElement;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CModelConfigElement_SetBodygroupOnAttachedModels(ptr_or_class: string|AnySDKClass): CModelConfigElement_SetBodygroupOnAttachedModels;