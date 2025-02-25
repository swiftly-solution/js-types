interface CSlopeComponentUpdater {
    "TraceDistance": number;
    readonly "SlopeAngle": CAnimParamHandle;
    readonly "SlopeAngleFront": CAnimParamHandle;
    readonly "SlopeAngleSide": CAnimParamHandle;
    readonly "SlopeHeading": CAnimParamHandle;
    readonly "SlopeNormal": CAnimParamHandle;
    readonly "SlopeNormal_WorldSpace": CAnimParamHandle;
    readonly "Parent": CAnimComponentUpdater;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSlopeComponentUpdater(ptr_or_class: string|AnySDKClass): CSlopeComponentUpdater;