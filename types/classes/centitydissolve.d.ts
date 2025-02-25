interface CEntityDissolve {
    "FadeInStart": number;
    "FadeInLength": number;
    "FadeOutModelStart": number;
    "FadeOutModelLength": number;
    "FadeOutStart": number;
    "FadeOutLength": number;
    "StartTime": number;
    "DissolveType": number;
    "DissolverOrigin": Vector;
    "Magnitude": number;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEntityDissolve(ptr_or_class: string|AnySDKClass): CEntityDissolve;