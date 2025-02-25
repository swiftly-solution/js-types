interface FeTaperedCapsuleStretch_t {
    "Node": Object;
    "CollisionMask": number;
    "Dummy": number;
    "Radius": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeTaperedCapsuleStretch_t(ptr_or_class: string|AnySDKClass): FeTaperedCapsuleStretch_t;