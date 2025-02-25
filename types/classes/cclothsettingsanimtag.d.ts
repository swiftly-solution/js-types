interface CClothSettingsAnimTag {
    "Stiffness": number;
    "EaseIn": number;
    "EaseOut": number;
    "VertexSet": string;
    readonly "Parent": CAnimTagBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CClothSettingsAnimTag(ptr_or_class: string|AnySDKClass): CClothSettingsAnimTag;