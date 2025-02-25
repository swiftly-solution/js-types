interface CGameScriptedMoveDef_t {
    "Type": any;
    "DestOffset": Vector;
    readonly "DestEntity": CBaseEntity;
    "Dest": QAngle;
    "Duration": number;
    "AngRate": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CGameScriptedMoveDef_t(ptr_or_class: string|AnySDKClass): CGameScriptedMoveDef_t;