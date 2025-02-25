interface CBodyGroupAnimTag {
    "Priority": number;
    readonly "BodyGroupSettings": Object;
    readonly "Parent": CAnimTagBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBodyGroupAnimTag(ptr_or_class: string|AnySDKClass): CBodyGroupAnimTag;