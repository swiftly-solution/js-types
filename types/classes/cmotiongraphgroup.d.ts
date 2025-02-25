interface CMotionGraphGroup {
    readonly "SearchDB": CMotionSearchDB;
    readonly "MotionGraphConfigs": Object;
    readonly "SampleToConfig": Object;
    readonly "IsActiveScript": AnimScriptHandle;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMotionGraphGroup(ptr_or_class: string|AnySDKClass): CMotionGraphGroup;