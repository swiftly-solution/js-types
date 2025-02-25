interface IKTargetSettings_t {
    "TargetSource": number;
    readonly "Bone": IKBoneNameAndIndex_t;
    readonly "AnimgraphParameterNamePosition": AnimParamID;
    readonly "AnimgraphParameterNameOrientation": AnimParamID;
    "TargetCoordSystem": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function IKTargetSettings_t(ptr_or_class: string|AnySDKClass): IKTargetSettings_t;