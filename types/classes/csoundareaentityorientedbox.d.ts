interface CSoundAreaEntityOrientedBox {
    "Min": Vector;
    "Max": Vector;
    readonly "Parent": CSoundAreaEntityBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundAreaEntityOrientedBox(ptr_or_class: string|AnySDKClass): CSoundAreaEntityOrientedBox;