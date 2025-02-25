interface CCSPlayerController_DamageServices {
    "SendUpdate": number;
    readonly "DamageList": Object;
    readonly "Parent": CPlayerControllerComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayerController_DamageServices(ptr_or_class: string|AnySDKClass): CCSPlayerController_DamageServices;