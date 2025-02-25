interface CCSGO_TeamIntroCharacterPosition {
    readonly "Parent": CCSGO_TeamPreviewCharacterPosition;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGO_TeamIntroCharacterPosition(ptr_or_class: string|AnySDKClass): CCSGO_TeamIntroCharacterPosition;