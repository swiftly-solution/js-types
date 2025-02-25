interface CAI_ExpresserWithFollowup {
    readonly "PostponedFollowup": ResponseFollowup;
    readonly "Parent": CAI_Expresser;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CAI_ExpresserWithFollowup(ptr_or_class: string|AnySDKClass): CAI_ExpresserWithFollowup;