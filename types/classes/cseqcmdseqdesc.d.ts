interface CSeqCmdSeqDesc {
    readonly "Flags": CSeqSeqDescFlag;
    readonly "Transition": CSeqTransition;
    "FrameRangeSequence": number;
    "FrameCount": number;
    "FPS": number;
    "SubCycles": number;
    "NumLocalResults": number;
    readonly "CmdLayerArray": Object;
    readonly "EventArray": Object;
    readonly "ActivityArray": Object;
    readonly "PoseSettingArray": Object;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSeqCmdSeqDesc(ptr_or_class: string|AnySDKClass): CSeqCmdSeqDesc;