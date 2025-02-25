interface FeSimdNodeBase_t {
    "Node": Object;
    "NodeX0": Object;
    "NodeX1": Object;
    "NodeY0": Object;
    "NodeY1": Object;
    "Dummy": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeSimdNodeBase_t(ptr_or_class: string|AnySDKClass): FeSimdNodeBase_t;