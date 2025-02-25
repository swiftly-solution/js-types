interface CLogicNPCCounterOBB {
    readonly "Parent": CLogicNPCCounterAABB;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicNPCCounterOBB(ptr_or_class: string|AnySDKClass): CLogicNPCCounterOBB;