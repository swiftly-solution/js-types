interface CRopeOverlapHit {
    readonly "Entity": any;
    readonly "OverlappingLinks": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRopeOverlapHit(ptr_or_class: string|AnySDKClass): CRopeOverlapHit;