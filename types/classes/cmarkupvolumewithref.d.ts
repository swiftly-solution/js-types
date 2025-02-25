interface CMarkupVolumeWithRef {
    "UseRef": boolean;
    "RefPos": Vector;
    "RefDot": number;
    readonly "Parent": CMarkupVolumeTagged;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMarkupVolumeWithRef(ptr_or_class: string|AnySDKClass): CMarkupVolumeWithRef;