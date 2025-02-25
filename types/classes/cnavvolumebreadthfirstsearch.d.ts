interface CNavVolumeBreadthFirstSearch {
    "StartPos": Vector;
    "SearchDist": number;
    readonly "Parent": CNavVolumeCalculatedVector;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CNavVolumeBreadthFirstSearch(ptr_or_class: string|AnySDKClass): CNavVolumeBreadthFirstSearch;