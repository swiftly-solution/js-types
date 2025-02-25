interface PointDefinition_t {
    "ControlPoint": number;
    "LocalCoords": boolean;
    "Offset": Vector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function PointDefinition_t(ptr_or_class: string|AnySDKClass): PointDefinition_t;