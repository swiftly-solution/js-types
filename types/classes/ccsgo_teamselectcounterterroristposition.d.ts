interface CCSGO_TeamSelectCounterTerroristPosition {
    readonly "Parent": CCSGO_TeamSelectCharacterPosition;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGO_TeamSelectCounterTerroristPosition(ptr_or_class: string|AnySDKClass): CCSGO_TeamSelectCounterTerroristPosition;