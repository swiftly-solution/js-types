interface CCSMinimapBoundary {
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSMinimapBoundary(ptr_or_class: string|AnySDKClass): CCSMinimapBoundary;