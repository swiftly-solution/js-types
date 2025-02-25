interface CAnimDesc {
    readonly "Flags": CAnimDesc_Flag;
    "Fps": number;
    readonly "Data": CAnimEncodedFrames;
    readonly "MovementArray": Object;
    readonly "EventArray": Object;
    readonly "ActivityArray": Object;
    readonly "HierarchyArray": Object;
    "Framestalltime": number;
    "RootMin": Vector;
    "RootMax": Vector;
    readonly "BoneWorldMin": Object;
    readonly "BoneWorldMax": Object;
    readonly "SequenceParams": CAnimSequenceParams;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAnimDesc(ptr_or_class: string|AnySDKClass): CAnimDesc;