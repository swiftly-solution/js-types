interface CCommentaryAuto {
    readonly "OnCommentaryNewGame": CEntityIOOutput;
    readonly "OnCommentaryMidGame": CEntityIOOutput;
    readonly "OnCommentaryMultiplayerSpawn": CEntityIOOutput;
    readonly "Parent": CBaseEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCommentaryAuto(ptr_or_class: string|AnySDKClass): CCommentaryAuto;