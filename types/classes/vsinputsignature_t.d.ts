interface VsInputSignature_t {
    readonly "Elems": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function VsInputSignature_t(ptr_or_class: string|AnySDKClass): VsInputSignature_t;