interface CPathSimple {
    "PathString": string;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPathSimple(ptr_or_class: string|AnySDKClass): CPathSimple;