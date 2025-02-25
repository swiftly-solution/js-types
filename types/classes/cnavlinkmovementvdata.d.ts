interface CNavLinkMovementVData {
    "IsInterpolated": boolean;
    "RecommendedDistance": number;
    readonly "AnimgraphVars": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNavLinkMovementVData(ptr_or_class: string|AnySDKClass): CNavLinkMovementVData;