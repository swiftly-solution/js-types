interface CHandshakeAnimTagBase {
    "IsDisableTag": boolean;
    readonly "Parent": CAnimTagBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CHandshakeAnimTagBase(ptr_or_class: string|AnySDKClass): CHandshakeAnimTagBase;