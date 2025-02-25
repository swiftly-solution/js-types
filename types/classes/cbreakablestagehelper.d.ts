interface CBreakableStageHelper {
    "CurrentStage": number;
    "StageCount": number;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CBreakableStageHelper(ptr_or_class: string|AnySDKClass): CBreakableStageHelper;