interface ClutterTile_t {
    "FirstInstance": number;
    "LastInstance": number;
    readonly "BoundsWs": AABB_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function ClutterTile_t(ptr_or_class: string|AnySDKClass): ClutterTile_t;