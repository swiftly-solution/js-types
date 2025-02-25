interface CSeqS1SeqDesc {
    readonly "Flags": CSeqSeqDescFlag;
    readonly "Fetch": CSeqMultiFetch;
    "LocalWeightlist": number;
    readonly "AutoLayerArray": Object;
    readonly "IKLockArray": Object;
    readonly "Transition": CSeqTransition;
    readonly "ActivityArray": Object;
    readonly "FootMotion": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSeqS1SeqDesc(ptr_or_class: string|AnySDKClass): CSeqS1SeqDesc;