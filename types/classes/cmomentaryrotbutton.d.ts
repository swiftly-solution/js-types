interface CMomentaryRotButton {
    readonly "OnUnpressed": CEntityIOOutput;
    readonly "OnFullyOpen": CEntityIOOutput;
    readonly "OnFullyClosed": CEntityIOOutput;
    readonly "OnReachedPosition": CEntityIOOutput;
    "LastUsed": number;
    "Start": QAngle;
    "End": QAngle;
    "IdealYaw": number;
    "Noise": string;
    "UpdateTarget": boolean;
    "Direction": number;
    "ReturnSpeed": number;
    "StartPosition": number;
    readonly "Parent": CRotButton;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMomentaryRotButton(ptr_or_class: string|AnySDKClass): CMomentaryRotButton;