interface CModelConfigElement_SetBodygroup {
    "GroupName": string;
    "Choice": number;
    readonly "Parent": CModelConfigElement;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CModelConfigElement_SetBodygroup(ptr_or_class: string|AnySDKClass): CModelConfigElement_SetBodygroup;