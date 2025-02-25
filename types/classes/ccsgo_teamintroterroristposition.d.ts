interface CCSGO_TeamIntroTerroristPosition {
    readonly "Parent": CCSGO_TeamIntroCharacterPosition;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGO_TeamIntroTerroristPosition(ptr_or_class: string|AnySDKClass): CCSGO_TeamIntroTerroristPosition;