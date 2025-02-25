interface CInfoLandmark {
    readonly "Parent": CPointEntity;
    ToPtr: () => string;
    IsValid: () => boolean;
}

declare function CInfoLandmark(ptr_or_class: string|AnySDKClass): CInfoLandmark;