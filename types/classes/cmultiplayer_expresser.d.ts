interface CMultiplayer_Expresser {
    "AllowMultipleScenes": boolean;
    readonly "Parent": CAI_ExpresserWithFollowup;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CMultiplayer_Expresser(ptr_or_class: string|AnySDKClass): CMultiplayer_Expresser;