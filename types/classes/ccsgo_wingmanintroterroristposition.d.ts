interface CCSGO_WingmanIntroTerroristPosition {
    readonly "Parent": CCSGO_WingmanIntroCharacterPosition;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGO_WingmanIntroTerroristPosition(ptr_or_class: string|AnySDKClass): CCSGO_WingmanIntroTerroristPosition;