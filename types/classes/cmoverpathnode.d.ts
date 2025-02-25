interface CMoverPathNode {
    "InTangentLocal": Vector;
    "OutTangentLocal": Vector;
    "ParentPathUniqueID": string;
    readonly "OnPassThrough": CEntityIOOutput;
    readonly "OnPassThroughForward": CEntityIOOutput;
    readonly "OnPassThroughReverse": CEntityIOOutput;
    readonly "Mover": CPathMover;
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMoverPathNode(ptr_or_class: string|AnySDKClass): CMoverPathNode;