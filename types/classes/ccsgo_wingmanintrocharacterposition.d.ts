interface CCSGO_WingmanIntroCharacterPosition {
    readonly "Parent": CCSGO_TeamIntroCharacterPosition;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGO_WingmanIntroCharacterPosition(ptr_or_class: string|AnySDKClass): CCSGO_WingmanIntroCharacterPosition;