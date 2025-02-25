interface lerpdata_t {
    readonly "Ent": CBaseEntity;
    "MoveType": number;
    "StartTime": number;
    "StartOrigin": Vector;
    readonly "FXIndex": ParticleIndex_t;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function lerpdata_t(ptr_or_class: string|AnySDKClass): lerpdata_t;