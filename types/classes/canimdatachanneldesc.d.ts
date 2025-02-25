interface CAnimDataChannelDesc {
    "Flags": number;
    "Type": number;
    readonly "ElementIndexArray": Object;
    readonly "ElementMaskArray": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimDataChannelDesc(ptr_or_class: string|AnySDKClass): CAnimDataChannelDesc;