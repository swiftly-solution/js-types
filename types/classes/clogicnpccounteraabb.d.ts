interface CLogicNPCCounterAABB {
    "DistanceOuterMins": Vector;
    "DistanceOuterMaxs": Vector;
    "OuterMins": Vector;
    "OuterMaxs": Vector;
    readonly "Parent": CLogicNPCCounter;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicNPCCounterAABB(ptr_or_class: string|AnySDKClass): CLogicNPCCounterAABB;