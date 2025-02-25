interface CSSDSMsg_PostLayer {
    readonly "Parent": CSSDSMsg_LayerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSSDSMsg_PostLayer(ptr_or_class: string|AnySDKClass): CSSDSMsg_PostLayer;