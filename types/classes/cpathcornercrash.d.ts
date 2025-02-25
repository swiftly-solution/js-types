interface CPathCornerCrash {
    readonly "Parent": CPathCorner;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPathCornerCrash(ptr_or_class: string|AnySDKClass): CPathCornerCrash;