interface CFlexDesc {
    "Facs": string;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFlexDesc(ptr_or_class: string|AnySDKClass): CFlexDesc;