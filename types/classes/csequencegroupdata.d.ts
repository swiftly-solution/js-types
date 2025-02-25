interface CSequenceGroupData {
    "Flags": number;
    readonly "LocalS1SeqDescArray": Object;
    readonly "LocalMultiSeqDescArray": Object;
    readonly "LocalSynthAnimDescArray": Object;
    readonly "LocalCmdSeqDescArray": Object;
    readonly "LocalBoneMaskArray": Object;
    readonly "LocalScaleSetArray": Object;
    readonly "LocalPoseParamArray": Object;
    readonly "LocalIKAutoplayLockArray": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSequenceGroupData(ptr_or_class: string|AnySDKClass): CSequenceGroupData;