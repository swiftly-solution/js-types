interface CSpotlightEnd {
    "LightScale": number;
    "Radius": number;
    "SpotlightDir": Vector;
    "SpotlightOrg": Vector;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSpotlightEnd(ptr_or_class: string|AnySDKClass): CSpotlightEnd;