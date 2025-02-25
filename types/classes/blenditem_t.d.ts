interface BlendItem_t {
    readonly "Tags": Object;
    readonly "Child": CAnimUpdateNodeRef;
    "Sequence": number;
    "Pos": Vector2D;
    "Duration": number;
    "UseCustomDuration": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function BlendItem_t(ptr_or_class: string|AnySDKClass): BlendItem_t;