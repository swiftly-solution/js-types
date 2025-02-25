interface CLogicAuto {
    readonly "OnMapSpawn": CEntityIOOutput;
    readonly "OnDemoMapSpawn": CEntityIOOutput;
    readonly "OnNewGame": CEntityIOOutput;
    readonly "OnLoadGame": CEntityIOOutput;
    readonly "OnMapTransition": CEntityIOOutput;
    readonly "OnBackgroundMap": CEntityIOOutput;
    readonly "OnMultiNewMap": CEntityIOOutput;
    readonly "OnMultiNewRound": CEntityIOOutput;
    readonly "OnVREnabled": CEntityIOOutput;
    readonly "OnVRNotEnabled": CEntityIOOutput;
    "Globalstate": string;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicAuto(ptr_or_class: string|AnySDKClass): CLogicAuto;