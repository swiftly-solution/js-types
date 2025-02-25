interface CInfoInstructorHintBombTargetB {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoInstructorHintBombTargetB(ptr_or_class: string|AnySDKClass): CInfoInstructorHintBombTargetB;