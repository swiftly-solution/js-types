interface CFireSmoke {
    "FlameModelIndex": number;
    "FlameFromAboveModelIndex": number;
    readonly "Parent": CBaseFire;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFireSmoke(ptr_or_class: string|AnySDKClass): CFireSmoke;