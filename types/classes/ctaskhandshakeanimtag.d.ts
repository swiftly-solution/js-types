interface CTaskHandshakeAnimTag {
    readonly "Parent": CHandshakeAnimTagBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CTaskHandshakeAnimTag(ptr_or_class: string|AnySDKClass): CTaskHandshakeAnimTag;