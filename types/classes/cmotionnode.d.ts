interface CMotionNode {
    "Name": string;
    readonly "Id": AnimNodeID;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMotionNode(ptr_or_class: string|AnySDKClass): CMotionNode;