interface CSceneEventInfo {
    "Layer": number;
    "Priority": number;
    "Sequence": number;
    "Weight": number;
    "HasArrived": boolean;
    "Type": number;
    "Next": number;
    "IsGesture": boolean;
    "ShouldRemove": boolean;
    readonly "Target": any;
    readonly "SceneEventId": SceneEventId_t;
    "ClientSide": boolean;
    "Started": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CSceneEventInfo(ptr_or_class: string|AnySDKClass): CSceneEventInfo;