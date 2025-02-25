interface CGameChoreoServices {
    readonly "Owner": CBaseAnimGraph;
    readonly "ScriptedSequence": CScriptedSequence;
    "TimeStartedState": number;
    readonly "Parent": IChoreoServices;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGameChoreoServices(ptr_or_class: string|AnySDKClass): CGameChoreoServices;