interface CFuncLadder {
    "LadderDir": Vector;
    "LocalTop": Vector;
    "PlayerMountPositionTop": Vector;
    "PlayerMountPositionBottom": Vector;
    "AutoRideSpeed": number;
    "Disabled": boolean;
    "FakeLadder": boolean;
    "HasSlack": boolean;
    "SurfacePropName": string;
    readonly "OnPlayerGotOnLadder": CEntityIOOutput;
    readonly "OnPlayerGotOffLadder": CEntityIOOutput;
    readonly "Parent": CBaseModelEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CFuncLadder(ptr_or_class: string|AnySDKClass): CFuncLadder;