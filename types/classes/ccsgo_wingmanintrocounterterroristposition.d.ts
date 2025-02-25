interface CCSGO_WingmanIntroCounterTerroristPosition {
    readonly "Parent": CCSGO_WingmanIntroCharacterPosition;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGO_WingmanIntroCounterTerroristPosition(ptr_or_class: string|AnySDKClass): CCSGO_WingmanIntroCounterTerroristPosition;