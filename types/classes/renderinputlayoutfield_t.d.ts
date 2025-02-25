interface RenderInputLayoutField_t {
    "SemanticName": Object;
    "SemanticIndex": number;
    "Format": number;
    "Offset": number;
    "Slot": number;
    "SlotType": number;
    "InstanceStepRate": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function RenderInputLayoutField_t(ptr_or_class: string|AnySDKClass): RenderInputLayoutField_t;