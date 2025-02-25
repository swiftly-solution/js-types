interface CSeqSynthAnimDesc {
    readonly "Flags": CSeqSeqDescFlag;
    readonly "Transition": CSeqTransition;
    "LocalBaseReference": number;
    "LocalBoneMask": number;
    readonly "ActivityArray": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSeqSynthAnimDesc(ptr_or_class: string|AnySDKClass): CSeqSynthAnimDesc;