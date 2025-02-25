interface CRopeKeyframeAlias_move_rope {
    readonly "Parent": CRopeKeyframe;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CRopeKeyframeAlias_move_rope(ptr_or_class: string|AnySDKClass): CRopeKeyframeAlias_move_rope;