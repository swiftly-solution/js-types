interface CCommentaryViewPosition {
    readonly "Parent": CSprite;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CCommentaryViewPosition(ptr_or_class: string|AnySDKClass): CCommentaryViewPosition;