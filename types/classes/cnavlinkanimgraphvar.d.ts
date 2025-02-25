interface CNavLinkAnimgraphVar {
    "AlignmentDegrees": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNavLinkAnimgraphVar(ptr_or_class: string|AnySDKClass): CNavLinkAnimgraphVar;