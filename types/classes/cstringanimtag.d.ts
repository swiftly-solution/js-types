interface CStringAnimTag {
    readonly "Parent": CAnimTagBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CStringAnimTag(ptr_or_class: string|AnySDKClass): CStringAnimTag;