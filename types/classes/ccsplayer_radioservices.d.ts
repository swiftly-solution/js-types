interface CCSPlayer_RadioServices {
    "GotHostageTalkTimer": number;
    "DefusingTalkTimer": number;
    "C4PlantTalkTimer": number;
    "RadioTokenSlots": Object;
    "IgnoreRadio": boolean;
    readonly "Parent": CPlayerPawnComponent;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSPlayer_RadioServices(ptr_or_class: string|AnySDKClass): CCSPlayer_RadioServices;