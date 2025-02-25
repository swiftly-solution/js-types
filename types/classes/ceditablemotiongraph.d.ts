interface CEditableMotionGraph {
    readonly "Parent": CMotionGraph;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CEditableMotionGraph(ptr_or_class: string|AnySDKClass): CEditableMotionGraph;