interface CCSGO_TeamIntroCounterTerroristPosition {
    readonly "Parent": CCSGO_TeamIntroCharacterPosition;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGO_TeamIntroCounterTerroristPosition(ptr_or_class: string|AnySDKClass): CCSGO_TeamIntroCounterTerroristPosition;