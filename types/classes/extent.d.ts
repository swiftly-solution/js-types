interface Extent {
    "Lo": Vector;
    "Hi": Vector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function Extent(ptr_or_class: string|AnySDKClass): Extent;