interface CBaseFire {
    "Scale": number;
    "StartScale": number;
    "ScaleTime": number;
    "Flags": number;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseFire(ptr_or_class: string|AnySDKClass): CBaseFire;