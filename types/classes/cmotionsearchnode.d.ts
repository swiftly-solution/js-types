interface CMotionSearchNode {
    readonly "Children": Object;
    readonly "Quantizer": CVectorQuantizer;
    readonly "SelectableSamples": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMotionSearchNode(ptr_or_class: string|AnySDKClass): CMotionSearchNode;