interface CBaseFlex {
    readonly "FlexWeight": Object;
    "LookTargetPosition": Vector;
    "Blinktoggle": boolean;
    "AllowResponsesEndTime": number;
    "LastFlexAnimationTime": number;
    readonly "NextSceneEventId": SceneEventId_t;
    "UpdateLayerPriorities": boolean;
    readonly "Parent": CBaseAnimGraph;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBaseFlex(ptr_or_class: string|AnySDKClass): CBaseFlex;