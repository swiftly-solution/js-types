interface CLogicCase {
    "Case": Object;
    "ShuffleCases": number;
    "LastShuffleCase": number;
    "UchShuffleCaseMap": Object;
    readonly "OnCase": Object;
    readonly "Parent": CLogicalEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CLogicCase(ptr_or_class: string|AnySDKClass): CLogicCase;