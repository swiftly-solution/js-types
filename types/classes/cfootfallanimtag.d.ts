interface CFootFallAnimTag {
    "Foot": number;
    readonly "Parent": CAnimTagBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFootFallAnimTag(ptr_or_class: string|AnySDKClass): CFootFallAnimTag;