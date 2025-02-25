interface CInfoInstructorHintBombTargetA {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoInstructorHintBombTargetA(ptr_or_class: string|AnySDKClass): CInfoInstructorHintBombTargetA;