interface CPathMover {
    "PathLength": number;
    "ClosedLoop": boolean;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CPathMover(ptr_or_class: string|AnySDKClass): CPathMover;