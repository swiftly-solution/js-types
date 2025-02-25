interface CCommentarySystem {
    "CommentaryConvarsChanging": boolean;
    "CommentaryEnabledMidGame": boolean;
    "NextTeleportTime": number;
    "TeleportStage": number;
    "CheatState": boolean;
    "IsFirstSpawnGroupToLoad": boolean;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCommentarySystem(ptr_or_class: string|AnySDKClass): CCommentarySystem;