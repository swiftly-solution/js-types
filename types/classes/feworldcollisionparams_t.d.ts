interface FeWorldCollisionParams_t {
    "WorldFriction": number;
    "GroundFriction": number;
    "ListBegin": number;
    "ListEnd": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function FeWorldCollisionParams_t(ptr_or_class: string|AnySDKClass): FeWorldCollisionParams_t;