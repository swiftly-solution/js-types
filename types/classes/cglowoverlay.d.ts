interface CGlowOverlay {
    "Pos": Vector;
    "Directional": boolean;
    "Direction": Vector;
    "InSky": boolean;
    "SkyObstructionScale": number;
    readonly "Sprites": Object;
    "Sprites1": number;
    "ProxyRadius": number;
    "HDRColorScale": number;
    "GlowObstructionScale": number;
    "CacheGlowObstruction": boolean;
    "CacheSkyObstruction": boolean;
    "Activated": number;
    "ListIndex": number;
    "QueryHandle": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGlowOverlay(ptr_or_class: string|AnySDKClass): CGlowOverlay;