interface CSSDSMsg_PreLayer {
    readonly "Parent": CSSDSMsg_LayerBase;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSSDSMsg_PreLayer(ptr_or_class: string|AnySDKClass): CSSDSMsg_PreLayer;