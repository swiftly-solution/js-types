interface CInfoInstructorHintTarget {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoInstructorHintTarget(ptr_or_class: string|AnySDKClass): CInfoInstructorHintTarget;