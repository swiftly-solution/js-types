interface CStanceScaleUpdateNode {
    readonly "Param": CAnimParamHandle;
    readonly "Parent": CUnaryUpdateNode;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CStanceScaleUpdateNode(ptr_or_class: string|AnySDKClass): CStanceScaleUpdateNode;