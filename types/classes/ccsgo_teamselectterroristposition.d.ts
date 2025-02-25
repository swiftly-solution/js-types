interface CCSGO_TeamSelectTerroristPosition {
    readonly "Parent": CCSGO_TeamSelectCharacterPosition;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGO_TeamSelectTerroristPosition(ptr_or_class: string|AnySDKClass): CCSGO_TeamSelectTerroristPosition;