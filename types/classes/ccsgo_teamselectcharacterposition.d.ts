interface CCSGO_TeamSelectCharacterPosition {
    readonly "Parent": CCSGO_TeamPreviewCharacterPosition;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCSGO_TeamSelectCharacterPosition(ptr_or_class: string|AnySDKClass): CCSGO_TeamSelectCharacterPosition;