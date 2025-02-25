interface CSoundContainerReferenceArray {
    "UseReference": boolean;
    readonly "Sounds": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSoundContainerReferenceArray(ptr_or_class: string|AnySDKClass): CSoundContainerReferenceArray;