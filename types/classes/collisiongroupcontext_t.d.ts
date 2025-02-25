interface CollisionGroupContext_t {
    "CollisionGroupNumber": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CollisionGroupContext_t(ptr_or_class: string|AnySDKClass): CollisionGroupContext_t;