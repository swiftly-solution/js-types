interface CAnimTagBase {
    "Comment": string;
    readonly "TagID": AnimTagID;
    "IsReferenced": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimTagBase(ptr_or_class: string|AnySDKClass): CAnimTagBase;